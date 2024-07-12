import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SaleService } from 'src/app/content/service/sale/sale.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.scss']
})
export class SaleDetailComponent {

    public formCliente: FormGroup;
    public loadingTable: boolean = false;
    public clienteData: any[] = [];
    public stockActual: number;
    public validacionStock: boolean = false;

    // Tabla Dinamica
    public productosAgregados: any[] = [];
    public recetasAgregadas: any[] = [];
    public totalProductos: number = 0; public totalProductosImpuestos: number = 0;
    public totalRecetas: number = 0; public totalRecetasImpuestos: number = 0;
    public totalImpuestos: number = 0;
    public subtotal: number = 0;
    public total: number = 0;
    public totales: any[] = [
        { nombre: 'Productos/Servicios', total: this.totalProductos - this.totalProductosImpuestos, accion: true },
        { nombre: 'Recetas', total: this.totalRecetas - this.totalRecetasImpuestos, accion: true },

        { nombre: 'Impuestos', total: this.totalImpuestos },
        { nombre: 'Subtotal', total: this.subtotal },
        { nombre: 'Total', total: this.total }
    ];

    // Modal Recetas
    public formReceta: FormGroup;
    public recetasData: any[] = [];
    public displayModalRecipes = false;

    // Modal productos
    public formProducto: FormGroup;
    public productsData: any[] = [];
    public displayModalProducts = false;

    //Modal Metodos Pago
    public formMetodoPago: FormGroup;
    public dataMetodosPago: any[] = [];
    public displayModalMetodosPago = false;

    public montoSinRedondear: number = 0;
    public excedente: number = 0
    public activarRedondear: boolean = false
    public stockProductoModificado: boolean = false;

    public creandoCliente: boolean = false;
    public totalMetodosPago: number = 0;

    constructor(
        private FB: FormBuilder,
        private spinner: NgxSpinnerService,
        private saleService: SaleService,
        private router: Router,
        private layoutService: LayoutService,
    ){
        this.buildForm();
    }

    ngOnInit(){
        this.spinner.hide();
        this.buildForm();
        this.loadData();
    }

    buildForm(){
        this.formCliente = this.FB.group({
            cliente_id: [null, []],
        });

        this.formProducto = this.FB.group({
            producto_id: [null, Validators.required],
            cantidad: [1, [Validators.required, Validators.min(1)]],
        });

        this.formReceta = this.FB.group({
            receta_id: [null, Validators.required],
            cantidad: [1, [Validators.required, Validators.min(1)]],
        });

        this.formMetodoPago = this.FB.group({
            metodos_pago: this.FB.array([]),
            cambio: [0, Validators.required],
        });

        this.agregarMetodoPago({value: {id: 1, nombre: 'Efectivo'}}); // Agrega el método de pago por defecto

    }

    //Registrar un nuevo húesped
    crearCliente(){
        this.creandoCliente = true;
    }

    handleClienteCreado(event: boolean) {
        //recibe el evento de si se ha creado o no el cliente
        this.creandoCliente = false;
        if (event) {
            this.loadData();
        }
        else return
    }

    //METODOS DE PAGO FUNCIONAMIENTO
    get metodosPago(): FormArray {
        return this.formMetodoPago.get('metodos_pago') as FormArray;
    }

    agregarMetodoPago(event) {
        //revisa que el metodo de pago no se haya agregado antes
        if(this.metodosPago.controls.find(control => control.get('metodo_pago_id').value === event.value.id)){
            return;
        }

        const newMetodoPagoControl = this.FB.group({
            metodo_pago_id: [event.value.id, Validators.required],
            valor: [null, [Validators.required, Validators.min(1)]],
            nombre: [event.value.nombre]
        });

        newMetodoPagoControl.get('nombre').disable(); //inhabilita el input del metodo de pago

        this.metodosPago.push(newMetodoPagoControl);
    }

    eliminarMetodoPago(index: number) {
        this.metodosPago.removeAt(index);
    }

    //Este metodo desactiva el botón guardar sí el valor de los metodos de pago no son iguales al total
    // Tambien sí no se ha agregado nada para facturar
    // get totalMetodosPago(): number {
    //     return this.metodosPago.controls
    //         .map(control => control.get('valor').value)
    //         .reduce((total, valor) => total + valor, 0);
    // }

    calcularTotalMetodosPago(){
        this.totalMetodosPago = 0;

        this.metodosPago.controls.forEach(control => {
            let monto = control.get('valor').value;
            if (isNaN(monto)) {
                monto = 0;
            }
            this.totalMetodosPago += monto;
        });
    }

    // // Esta propiedad se encarga de calcular la resta del total y la devuelta en el modal faturar
    // get cambio(): number {
    //     const totalMetodosPago = this.totalMetodosPago;
    //     const totalVenta = this.total;
    //     return totalMetodosPago > totalVenta ? totalMetodosPago - totalVenta : 0;
    // }

    submitFactura() {
        if (this.formMetodoPago.valid) {
            // Cierra el modal
            this.displayModalMetodosPago = false;

            // Actualiza el total
            this.calcularTotales();
        }
    }

    //Consulta productos
    loadData() {
        this.spinner.show();
        this.saleService.getDatosVentasCrear().subscribe(
            (response: any) => {
                this.spinner.hide();
                // Productos

                function calcularPrecioTotalConImpuestos(element: any): number {
                    const precioBase = parseFloat(element.precio);
                    let agregado = 0
                    element.impuestos.forEach((impuesto: any) => {
                        const valorImpuesto = precioBase * (Number(impuesto.impuesto.porcentaje) / 100);
                        agregado += valorImpuesto;
                    });
                    return precioBase + agregado;
                }

                this.productsData = response.productos.map(item => ({
                    ...item,
                    precioTotal: calcularPrecioTotalConImpuestos(item),
                    tipo_servicio_id: item.tipo_producto === 1 ? 1 : 2, // Asume que 1 es el ID para productos y 2 para servicios
                    stockModificado: false
                }));

                // Recetas
                this.recetasData = response.recetas.map(receta => ({
                    ...receta,
                    precioTotal: calcularPrecioTotalConImpuestos(receta),
                    tipo_servicio_id: 4
                })); // Asumimos que 4 es el ID para recetas

                // Clientes
                this.clienteData = response.clientes;

                // Métodos de pago
                this.dataMetodosPago = response.metodosPago;
            },
            (error) => {
                console.error(error);
            }
        );
    }

    //Agrega producto/servicio a la lista dinamica
    agregarProductos() {
        const productoSeleccionado = this.formProducto.get('producto_id').value;
        const cantidad = this.formProducto.get('cantidad').value;

        const subtotal = parseFloat(productoSeleccionado.precio);
        const impuesto = subtotal * productoSeleccionado.impuestos_total / 100; // Calcula el total de impuestos
        const total = (subtotal + impuesto) * cantidad;
        const productoAgregado = {
            ...productoSeleccionado,
            cantidad: Number(cantidad),
            subtotal: subtotal,
            total: total,
            stockModificado: false, // Validacion de stock que se activa con la peticion de venta
            impuestos: impuesto
        };

        if (this.productosAgregados.some(producto => producto.id === productoAgregado.id)) {
            const index = this.productosAgregados.findIndex(producto => producto.id === productoAgregado.id);
            // this.productosAgregados[index].subtotal += productoAgregado.subtotal;
            // this.productosAgregados[index].impuestos += productoAgregado.impuestos;
            this.productosAgregados[index].cantidad += productoAgregado.cantidad;
            this.productosAgregados[index].total += productoAgregado.total;
        } else {
            this.productosAgregados.push(productoAgregado);
        }

        this.productsData.find(producto => producto.id === productoAgregado.id).stockActual -= cantidad;
        this.stockProductoModificado = this.productosAgregados.some(producto => producto.stockModificado ==true);

        this.calcularTotales();
        this.displayModalProducts = false;
        this.formProducto.reset();
    }

    validarStock(tipo) {
        if(tipo == 'producto' && this.formProducto.valid){
            const productoSeleccionado = this.formProducto.get('producto_id').value;
            const cantidad = this.formProducto.get('cantidad').value;

            if (productoSeleccionado.stockActual < cantidad && productoSeleccionado.sin_limite_cantidad == 1) {
                this.validacionStock = true;
            } else {
                this.validacionStock = false;
            }
        }

        //TODO agregar validacion de stock recetas

    }

    // Eliminar Productos

    eliminarProducto(producto) {
        const index = this.productosAgregados.indexOf(producto);
        if (index > -1) {
            this.productosAgregados.splice(index, 1);
            this.productsData.find(productoData => productoData.id === producto.id).stockActual += producto.cantidad;
        }

        this.stockProductoModificado = this.productosAgregados.some(producto => producto.stockModificado ==true);

        this.calcularTotales();
    }

    //Recetas

    //Agrega las recetas a la tabla dinamica
    agregarRecetas() {
        const recetaSeleccionada = this.formReceta.get('receta_id').value;
        const cantidad = this.formReceta.get('cantidad').value;

        const subtotal = parseFloat(recetaSeleccionada.precio);
        const impuesto = subtotal * recetaSeleccionada.impuestos_total / 100; // Calcula el total de impuestos
        const total = (subtotal + impuesto) * cantidad;
        const recetaAgregada = {
            ...recetaSeleccionada,
            cantidad: cantidad,
            subtotal: subtotal,
            total: total,
            impuestos: impuesto
        };

        if (this.recetasAgregadas.some(receta => receta.id === recetaAgregada.id)) {
            const index = this.recetasAgregadas.findIndex(receta => receta.id === recetaAgregada.id);
            // this.recetasAgregadas[index].subtotal += recetaAgregada.subtotal;
            // this.recetasAgregadas[index].impuestos += recetaAgregada.impuestos;
            this.recetasAgregadas[index].total += recetaAgregada.total;
            this.recetasAgregadas[index].cantidad += recetaAgregada.cantidad;
        } else {
            this.recetasAgregadas.push(recetaAgregada);
        }

        this.calcularTotales();
        this.displayModalRecipes = false;
        this.formReceta.reset();
    }

    eliminarReceta(recetaParaEliminar) {
        // Encuentra el índice de la receta en el array de recetas agregadas
        const indice = this.recetasAgregadas.findIndex(receta => receta.id === recetaParaEliminar.id);

        // Si la receta se encuentra en el array, la elimina
        if (indice !== -1) {
            this.recetasAgregadas.splice(indice, 1);
        } else {
            console.error(`No se encontró la receta con id ${recetaParaEliminar.id} en recetasAgregadas`);
        }

        this.calcularTotales();
    }

    calcularTotales() {
        // Calcula el subtotal y los impuestos para productos y recetas
        this.totalProductos = this.productosAgregados.reduce((total, producto) => total + producto.total, 0);
        this.totalProductosImpuestos = this.productosAgregados.reduce((total, producto) => total + (producto.impuestos * producto.cantidad), 0);

        this.totalRecetas = this.recetasAgregadas.reduce((total, receta) => total + receta.total, 0);
        this.totalRecetasImpuestos = this.recetasAgregadas.reduce((total, receta) => total + (receta.impuestos * receta.cantidad), 0);

        this.totalImpuestos = this.totalProductosImpuestos + this.totalRecetasImpuestos;

        // Calcula el total
        this.subtotal = (this.totalProductos - this.totalProductosImpuestos) + (this.totalRecetas - this.totalRecetasImpuestos);
        this.total = this.subtotal + this.totalImpuestos;

        // Actualiza el arreglo de totales
        this.totales = [
            { nombre: 'Productos/Servicios', total: this.totalProductos - this.totalProductosImpuestos, accion: true},
            { nombre: 'Recetas', total: this.totalRecetas - this.totalRecetasImpuestos, accion: true },

            { nombre: 'Impuestos', total: this.totalImpuestos },
            { nombre: 'Subtotal', total: this.subtotal },
            { nombre: 'Total', total: this.total }
        ];

        // Redondear monto
        function redondear(montoFactura: number) {
            let residuo = montoFactura % 50;
            let redondeo = 0;
            if (residuo > 0) {
                redondeo = 50 - residuo;
            }
            return montoFactura + redondeo;
        }

        if (this.activarRedondear) {
            this.montoSinRedondear = this.total;
            this.total = redondear(this.total);
            this.excedente = this.total - this.montoSinRedondear;

            //agrega el excedente y el total sin redondear
            this.totales[4] = { nombre: 'Total sin redondear', total: this.montoSinRedondear };
            this.totales.push({ nombre: 'Excedente', total: this.excedente });
            this.totales.push({ nombre: 'Total', total: this.total });
        }

        else {
            this.excedente = 0
            this.totales = this.totales.filter((element) => element.nombre !== 'Total sin redondear' || element.nombre !== 'Excedente');
        }
    }

    modals(tipo: 'Productos/Servicios' | 'Recetas' | 'Pagar') {
        switch (tipo) {
            case 'Productos/Servicios':
                this.formProducto.reset()
                this.displayModalProducts = true;
                this.validacionStock = false; // Resetea la validación al abrir el modal
                break;
            case 'Recetas':
                this.formReceta.reset()
                this.displayModalRecipes = true;
                this.validacionStock = false; // Resetea la validación al abrir el modal
                break;
            case 'Pagar':
                this.displayModalMetodosPago = true;
                break;
            default:
                break;
        }
    }

    // Crear Venta
    crearVenta(){
        this.spinner.show();

        // Combina los productos y recetas agregados
        const todosLosDetalles = [...this.productosAgregados, ...this.recetasAgregadas];

        // Verifica si todosLosDetalles es un array
        if (!Array.isArray(todosLosDetalles)) {
            this.spinner.hide();
            Swal.fire({
                title: "Error",
                text: "Hubo un error al preparar los detalles de la venta.",
                icon: "error"
            });
            return; // Termina la ejecución del método si todosLosDetalles no es un array
        }

        let dataVenta = {
            cliente_id: this.formCliente.get('cliente_id').value ? parseInt(this.formCliente.get('cliente_id').value[0]['id']) : null,
            total: this.total,
            subtotal: this.subtotal,
            excedente: this.excedente,
            total_impuestos: this.totalImpuestos,
            estado_id: 1, // Asume que 1 es el ID para el estado "creado"
        };

        const formData = new FormData();
        for (const i in dataVenta) {
            if (dataVenta.hasOwnProperty(i)) {
                formData.append(i, dataVenta[i]);
            }
        }

        todosLosDetalles.forEach((detalle, index) => {

            // Cambia la clave 'id' a 'consumo_id'
            detalle.consumo_id = detalle.id;
            // delete detalle.id;

            // Cambia la clave 'subtotal' a 'valor_consumo'
            detalle.valor_consumo = detalle.subtotal;
            // delete detalle.subtotal;

            // Cambia la clave 'tipo_servicio_id' a 'tipo_consumo'
            detalle.tipo_consumo = detalle.tipo_servicio_id;
            // delete detalle.tipo_servicio_id;

            // Asigna el valor calculado a 'valor_impuesto'
            detalle.valor_impuesto = detalle.impuestos || 0;

            for (const key in detalle) {
                if (detalle.hasOwnProperty(key)) {
                    formData.append(`detalles_venta[${index}][${key}]`, detalle[key]);
                }
            }
        });

        // NUEVO: Creación de los métodos de pago
        const metodosPago = this.formMetodoPago.get('metodos_pago').value;

        metodosPago.forEach((metodoPago, index) => {
            for (const key in metodoPago) {
                if (metodoPago.hasOwnProperty(key)) {
                    const value = metodoPago[key];
                    formData.append(`metodos_pago[${index}][${key}]`, value);
                }
            }
        });

        this.saleService.createVentas(formData).subscribe(
            (response: any) => {
                this.spinner.hide();
                if(response.venta){
                    this.formCliente.reset();
                    this.productosAgregados = [];
                    this.recetasAgregadas = [];
                    this.calcularTotales();

                    Swal.fire({
                        title: "Exito",
                        text: "Venta creada exitosamente.",
                        icon: "success"
                    }).then(() =>{this.router.navigate(['/dashboard/dashboardSell']);});
                    this.layoutService.reloadComponent();

                } else if (response.code === 'warning') {
                    Swal.fire({
                        title: "Advertencia",
                        text: response.msm,
                        icon: "warning"
                    });
                } else {
                    Swal.fire({
                        title: "Error",
                        text: "Error al crear la venta." ,
                        icon: "error"
                    });
                }
            },
            (error) => {
                // Manejo del error de validación del stock
                if (error.status === 400 && error.error.error.startsWith('Stock insuficiente')) {
                    this.spinner.hide();
                    Swal.fire({
                        title: "Advertencia",
                        text: error.error.error,
                        icon: "warning"
                    });

                    const productos_sin_stock = error.error.productos_sin_stock;

                    this.stockProductoModificado = true;

                    productos_sin_stock.forEach(productoSinStock => {
                        const producto = this.productsData.find(producto => producto.id === productoSinStock.id);
                        const producto_agregado = this.productosAgregados.find(producto => producto.consumo_id === productoSinStock.id);

                        if (producto) {
                            producto.stockActual = 0;
                        }

                        if (producto_agregado) {
                            producto_agregado.cantidad = productoSinStock.stockActual;
                            producto_agregado.total = producto.precioTotal * producto_agregado.cantidad;
                            producto_agregado.stockModificado = true;
                        }
                        this.calcularTotales();
                    });

                    // this.productosAgregados.forEach(producto => {
                    //     producto.subtotal = producto.valor_consumo;
                    // });
                    // this.recetasAgregadas.forEach(receta => {
                    //     receta.subtotal = receta.valor_consumo;
                    // });
                    // this.calcularTotales();
                } else {
                    this.spinner.hide();
                    console.error('Error:', error);
                }
            }
        );
    }

}
