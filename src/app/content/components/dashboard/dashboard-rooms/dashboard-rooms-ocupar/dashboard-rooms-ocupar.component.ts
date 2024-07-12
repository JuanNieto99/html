import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from '@fullcalendar/core/internal';
import { el } from '@fullcalendar/core/internal-common';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { DashboardRoomsService } from 'src/app/content/service/dashboardRooms/dashboard-rooms.service';
import Swal from 'sweetalert2';
import { Config } from '../../../../storage/config';
import { AppComponent } from 'src/app/app.component';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-dashboard-rooms-ocupar',
    templateUrl: './dashboard-rooms-ocupar.component.html',
    styleUrls: ['./dashboard-rooms-ocupar.component.scss']
})
export class DashboardRoomsOcuparComponent {




    public form: FormGroup;
    public formFacturar: FormGroup;
    public formTarifa: FormGroup;
    public formProducto: FormGroup;
    public formMetodoPago: FormGroup;
    public formReceta: FormGroup;
    public formFacturacionMediosPago: FormArray;
    public habitacionId: number;
    public dataRoomDetail: any;
    public dataTarifa: any[] = [];
    public dataMetodosPago: any;
    public dataAbonos: any[] = [];
    public tarifasTotal: number = 0;
    public abonosTotal: number = 0;
    public items: MenuItem[] = [];
    public total: number = 0;
    public subtotaltotal: number = 0;
    public detalleAbonoId: number;
    public tarifaVisible: boolean = false;
    public productoVisible: boolean = false;
    public abonoVisible: boolean = false;
    public recetaVisible: boolean = false;
    public allTarifas: any[] = [];
    public allTarifasDefault: any[] = [];
    public estadoHabitacion: any;
    public disableFactura: boolean;
    public facturarVisible: boolean;
    public totalMetodosPago: number = 0;
    public impuestos: any;
    public totalImpuestos: number = 0;
    public impuestosData: any[] = [];
    public detalleId: number = 0;
    public hotelId: number = 0;
    public clienteId: number = 0;
    private impuestos_save: any = [];
    private baseUrl: string;
    private token: string;
    public montoSinRedondear: number = 0;
    public excedente: number = 0
    public activarRedondear: boolean = false

    public productsData: any[] = [];
    public recetasData: any = [];

    public productosAgregados: any[] = [];
    public recetasAgregadas: any[] = [];

    public totalProductos: number = 0;
    public totalProductosImpuestos: number = 0;

    public totalRecetas: number = 0;
    public totalRecetasImpuestos: number = 0;

    public validacionStock: boolean = false;
    public stockProductoModificado: boolean = false;


    public totales: any[] = [
        { nombre: 'Tarifas', total: this.tarifasTotal, tipo: 1 }, //0
        { nombre: 'Productos/Servicios', total: this.totalProductos, tipo: 1 }, //1
        { nombre: 'Recetas', total: this.totalRecetas, tipo: 1 }, //2
        { nombre: 'Abonos', total: this.abonosTotal, }, //3
        { nombre: 'Impuestos', total: this.totalImpuestos }, //4
        { nombre: 'Subtotal', total: this.subtotaltotal }, //5
        { nombre: 'Total sin redondear', total: 0 }, //6
        { nombre: 'Excedente', total: 0 }, //7
        { nombre: 'Total', total: 0 }, //8
    ];

    constructor(
        private dashboardRoomsService: DashboardRoomsService,
        private FB: FormBuilder,
        private spinner: NgxSpinnerService,
        private datePipe: DatePipe,
        private router: Router,
        private route: ActivatedRoute,
        private appComponent: AppComponent,
        private layoutService: LayoutService,
    ) {
        this.formFacturacionMediosPago = this.FB.array([]);
        this.baseUrl = Config.url;
        this.token = appComponent.getToken();
    }

    ngOnInit() {
        this.spinner.hide();
        this.dataRoomDetail = [];
        this.habitacionId = parseFloat(this.route.snapshot.paramMap.get('idHabitacion'));
        this.buildForm();
        this.getRoomOcupar();
    }

    cargarItems() {
        this.items = [
            { label: 'Facturar', icon: 'pi pi-dollar', disabled: this.disableFactura, command: (event: MenuItemCommandEvent) => this.opcionSelect(event, 'facturar') },
            { label: 'Salida (Check-out)', disabled: (this.estadoHabitacion?.estado_id == 2 ? false : true), icon: 'pi pi-lock-open', command: (event: MenuItemCommandEvent) => this.opcionSelect(event, 'desocupar') }
        ];
    }

    buildForm() {
        const data = this.dataRoomDetail;
        this.form = this.FB.group({
            nombreHabitacion: [data?.detalleHabitacion?.habitacion?.nombre, []],
            descripcion: [data?.detalleHabitacion?.descripcion, []],
            nombreCliente: [(data?.detalleHabitacion?.cliente?.nombres ? data?.detalleHabitacion?.cliente?.nombres : '') + ' ' + (data?.detalleHabitacion?.cliente?.apellidos ? data?.detalleHabitacion?.cliente?.apellidos : ''), []],
            desde: [data?.detalleHabitacion?.checkin, []],
            hasta: [data?.detalleHabitacion?.checkout, []],
        });

        this.formTarifa = this.FB.group({
            tarifa_id: [this.allTarifasDefault, [Validators.required]]
        });

        this.formProducto = this.FB.group({
            producto_id: [null, [Validators.required]],
            cantidad: [1, [Validators.required, Validators.min(1)]],
        });

        this.formMetodoPago = this.FB.group({
            metodo_pago_id: [null, [Validators.required]],
            valor: [null, [Validators.required, Validators.min(1)]],
        });

        this.formReceta = this.FB.group({
            receta_id: [null, [Validators.required]],
            cantidad: [1, [Validators.required, Validators.min(1)]],
        });

        let form = this.FB.group({
            monto: ['', [Validators.required, Validators.min(0)]],
            medio_pago: [this.dataMetodosPago ? this.dataMetodosPago[0] : null, [Validators.required, Validators.min(1)]],
            nombre: [this.dataMetodosPago ? this.dataMetodosPago[0].nombre : '', []]
        });

        form.get('nombre').disable();

        this.formFacturacionMediosPago = this.FB.array([]);

        this.formFacturacionMediosPago.push(
            form
        )

        this.formFacturar = this.FB.group({
            isFacturaElectronica: [''],
        });

        this.form.disable();
    }

    getRoomOcupar() {
        let data = {
            habitacion_id: this.habitacionId,
        }

        this.spinner.show();

        this.dashboardRoomsService.getOcuparHabitacion(data).subscribe(reques => {
            this.spinner.hide();
            this.dataRoomDetail = reques;
            this.estadoHabitacion = this.dataRoomDetail.estadoHabitacion;
            this.impuestos = this.dataRoomDetail.impuesto;
            this.allTarifasDefault = [];
            this.dataRoomDetail.tarifasHabitacion.forEach(element => {

                this.dataTarifa.push({

                    valor: element.valor,
                    nombre: element.tarifa?.nombre,
                    tipo: element.tipo,
                    id: element.item_id,
                    //  identificador: identificador,
                });

            });


            this.dataRoomDetail.recetasHabitacion.forEach(element => {
                let identificador = 'receta' + this.generarIdAleatorio();
                let impuesto = 0;

                element?.recetas?.impuestos.forEach(receta_detalle_element => {
                    let totalImpuesto = parseInt(receta_detalle_element?.impuesto?.porcentaje) * parseFloat(element?.recetas.precio) / 100;
                    impuesto = impuesto + totalImpuesto;

                    this.impuestos_save.push({
                        'valor': totalImpuesto,
                        'porcentaje': receta_detalle_element?.impuesto?.porcentaje,
                        'cantidad': element?.cantidad,
                        'id': receta_detalle_element?.impuesto.id,
                        'item_id': element?.item_id,
                        'tipo': '4',
                        'identificador': identificador,
                    });

                });

                this.recetasAgregadas.push({
                    nombre: element?.recetas?.nombre,
                    subtotal: element?.recetas?.precio,
                    impuestos: impuesto,
                    total: (impuesto + parseFloat(element?.recetas?.precio)) * Number(element?.cantidad),

                    cantidad: element?.cantidad,
                    id: element?.item_id,
                    identificador: identificador,
                    impuestosData: element.recetas?.impuestos
                });

                this.totalRecetas = this.totalRecetas + impuesto + parseFloat(element?.recetas?.precio);
            });



            this.dataMetodosPago = this.dataRoomDetail.metodos_pago;

            this.dataRoomDetail.productosHabitacion.forEach(element => {

                let impuesto = 0;
                let identificador = 'productos' + this.generarIdAleatorio()

                element.productos.impuestos.forEach(impuestoElement => {
                    let totalImpuesto = parseInt(impuestoElement.impuesto.porcentaje) * (parseFloat(element?.productos.precio)) / 100;

                    impuesto = impuesto + totalImpuesto;

                    this.impuestos_save.push({
                        'valor': totalImpuesto,
                        'porcentaje': impuestoElement.impuesto.porcentaje,
                        'cantidad': element?.cantidad,
                        'id': impuestoElement.impuesto.id,
                        'item_id': element?.item_id,
                        'tipo': '1',
                        'identificador': identificador,
                    });

                });

                this.productosAgregados.push({
                    nombre: element?.productos.nombre,
                    cantidad: parseFloat(element?.cantidad),
                    subtotal: parseFloat(element?.productos.precio),
                    impuestos: impuesto,
                    valorImpuesto: (impuesto + parseFloat(element?.productos.precio)) * parseFloat(element?.cantidad),
                    id: element?.item_id,
                    identificador: identificador,
                    tipoProducto: element?.productos.tipo_producto,
                    impuestosData: element.productos.impuestos
                });

            });

            this.dataRoomDetail.abonoHabitacion.forEach(element => {
                this.dataAbonos.push(
                    {
                        valor: element.valor,
                        nombre: element.metodo_pago.nombre,
                        id: element.id,
                        metodo_pago_id: element?.metodo_pago.id,
                        identificador: 'abonos' + this.generarIdAleatorio(),
                    }
                );
            });


            this.dataRoomDetail.tarifas.forEach(element => {
                //    let identificador =  'tarifas'+this.generarIdAleatorio();
                this.allTarifas.push(
                    {
                        valor: element.valor,
                        nombre: element.nombre,
                        tipo: element.tipo,
                        id: element.id,
                        // identificador: identificador,
                    }
                );

                if (this.dataRoomDetail.tarifasHabitacion.filter(elementFilter => (elementFilter?.tarifa?.id == element.id)).length > 0) {
                    this.allTarifasDefault.push({
                        valor: element.valor,
                        nombre: element.nombre,
                        tipo: element.tipo,
                        id: element.id,
                        //  identificador: identificador,
                    });
                }

            });

            function calcularPrecioTotalConImpuestos(element: any): number {
                const precioBase = parseFloat(element.precio);
                let agregado = 0
                element.impuestos.forEach((impuesto: any) => {
                    const valorImpuesto = precioBase * (Number(impuesto.impuesto.porcentaje) / 100);
                    agregado += valorImpuesto;
                });
                return precioBase + agregado;
            }

            this.dataRoomDetail.productos.forEach(element => {
                this.productsData.push({
                        id: element.id,
                        nombre: element.nombre,
                        valor: element.precio,
                        tipo: element.tipo_producto,
                        impuestos: element.impuestos,
                        stockActual: Number(element?.disponibles), //en ventas el stock se trae de otra forma
                        stockActualFijo: Number(element?.disponibles_all),
                        valor_total: calcularPrecioTotalConImpuestos(element),
                        sin_limite_cantidad: element?.sin_limite_cantidad
                })
            })

            this.dataRoomDetail.recetas.forEach(element=>{
                this.recetasData.push({
                    id: element.id,
                    nombre: element.nombre,
                    valor: element.precio,
                    impuestos: element.impuestos,
                    stock: element.cantidad,
                    valor_total: calcularPrecioTotalConImpuestos(element),
                })
            })

            this.detalleId = this.dataRoomDetail?.detalleHabitacion.id;
            this.hotelId = this.dataRoomDetail?.detalleHabitacion.hotel_id;
            this.clienteId = this.dataRoomDetail?.detalleHabitacion.cliente?.id;
            //
            this.buildForm();
            this.recalcular();
            this.cargarItems();

        })
    }

    recalcular() {
        this.tarifasTotal = 0;
        this.totalProductos = 0;
        this.abonosTotal = 0;
        this.total = 0;
        this.totalImpuestos = 0;
        this.totalRecetas = 0;

        this.dataTarifa.forEach(element => {
            this.tarifasTotal = this.tarifasTotal + parseFloat(element.valor);
        });

        this.totalProductos = this.productosAgregados.reduce((total, producto) => total + producto.valorImpuesto, 0);
        this.totalProductosImpuestos = this.productosAgregados.reduce((total, producto) => total + (producto.impuestos * producto.cantidad), 0);

        this.totalRecetas = this.recetasAgregadas.reduce((total, receta) => total + receta.total, 0);
        this.totalRecetasImpuestos = this.recetasAgregadas.reduce((total, receta) => total + (receta.impuestos * receta.cantidad), 0);

        this.dataAbonos.forEach(element => {
            this.abonosTotal = this.abonosTotal + parseFloat(element.valor);
        });
 
        this.totalImpuestos = this.totalProductosImpuestos + this.totalRecetasImpuestos;
        this.subtotaltotal = (this.tarifasTotal + (this.totalProductos - this.totalProductosImpuestos) + (this.totalRecetas - this.totalRecetasImpuestos));
        this.total = (this.subtotaltotal + this.totalImpuestos) - this.abonosTotal;

        this.totales = [
            { nombre: 'Tarifas', total: this.tarifasTotal, tipo: 1}, //0
            { nombre: 'Productos/Servicios', total: this.totalProductos - this.totalProductosImpuestos, tipo: 1 }, //1
            { nombre: 'Recetas', total: this.totalRecetas - this.totalRecetasImpuestos, tipo: 1 }, //2
            { nombre: 'Abonos', total: this.abonosTotal, }, //3

            { nombre: 'Impuestos', total: this.totalImpuestos }, //4
            { nombre: 'Subtotal', total: this.subtotaltotal }, //5
            { nombre: 'Total', total: this.total } //6
        ]

        // Redondear monto
        function redondear(montoFactura: number) {
            let residuo = montoFactura % 50;
            let redondeo = 0;
            if (residuo > 0) {
                redondeo = 50 - residuo;
            }
            return montoFactura + redondeo;
        }

        if(this.activarRedondear){
            this.montoSinRedondear = this.total;
            this.total = redondear(this.total);
            this.excedente = this.total - this.montoSinRedondear;

            //agrega el excedente y el total sin redondear despues de subtotal en totales
            this.totales[6] = { nombre: 'Total sin redondear', total: this.montoSinRedondear };
            this.totales.push({ nombre: 'Excedente', total: this.excedente });
            this.totales.push({ nombre: 'Total', total: this.total });
        }

        else {
            this.excedente = 0
            this.totales = this.totales.filter((element) => element.nombre !== 'Total sin redondear' || element.nombre !== 'Excedente');
        }

        this.validaciones();
    }

    modals(tipo){
        switch (tipo){
            case 'Tarifas':
                this.tarifaVisible = true;
                break;
            case 'Productos/Servicios':
                this.formProducto.reset();
                this.productoVisible = true;
                this.validacionStock = false;
                break;
            case 'Recetas':
                this.formReceta.reset();
                this.recetaVisible = true;
                this.validacionStock = false;
                break;
            case 'Abonos':
                this.abonoVisible = true;
                break;
            default:
                break;
        }
    }

    validarStock(tipo){
        if (tipo == 'producto' && this.formProducto.valid) {
            const productoSeleccionado = this.formProducto.get('producto_id').value;
            const cantidad = this.formProducto.get('cantidad').value;

            if (productoSeleccionado.stockActual < cantidad && productoSeleccionado.sin_limite_cantidad == 1) {
                this.validacionStock = true;
            } else {
                this.validacionStock = false;
            }
        }

        //TODO validar stock de recetas
    }


    opcionSelect(select, opcion) {
        if (opcion == "desocupar") {
            this.desocuparHabitacion();
        }

        if (opcion == "facturar") {
            this.facturacion();
        }
    }


    confirmDeleteAbono(identificador: string) {
        this.dataAbonos = this.dataAbonos.filter(element => element.identificador != identificador);
        this.recalcular();
    }

    confirmDeleteTarifa(id: string) {
        this.dataTarifa = this.dataTarifa.filter(element => element.id != id);
        this.allTarifasDefault = this.dataTarifa;
        this.buildForm();
        this.recalcular();
    }

    confirmDeleteProductos(identificador: string) {

        //aumenta el stock de los productos eliminados
        this.productosAgregados.forEach(element => {
            if(element.identificador == identificador){
                this.productsData.forEach(product => {
                    if(product.id == element.id){
                        product.stockActual = product.stockActual + element.cantidad;
                    }
                })
            }
        })

        this.productosAgregados = this.productosAgregados.filter(element => element.identificador != identificador);
        this.stockProductoModificado = this.productosAgregados.some(producto => producto.stockModificado == true);
        this.impuestos_save = this.impuestos_save.filter(element => element.identificador != identificador);

        this.recalcular();
    }

    confirmDeleteRecetas(identificador: string) {
        this.recetasAgregadas = this.recetasAgregadas.filter(element => element.identificador != identificador);
        this.impuestos_save = this.impuestos_save.filter(element => element.identificador != identificador);
        this.recalcular();
    }

    submitTarifa() {
        this.recargarTablaTarifa();
        this.tarifaVisible = false;
        this.recalcular();
    }

    submitProducto() {
        this.recargarTablaProducto();
        this.productoVisible = false;
        this.recalcular();
    }

    submitReceta() {
        this.recetaVisible = false;
        this.recargarTablaReceta();
        this.recalcular();
    }

    recargarTablaReceta(receta_seleccionado: any = null, cantidad_disponible: number = null, index:number = null) {

        let recetaSeleccionada = receta_seleccionado;

        if(receta_seleccionado == null){
            recetaSeleccionada = this.formReceta.get('receta_id')?.value;
        }  

        let cantidad = cantidad_disponible;

        if(cantidad_disponible == null){
            cantidad = this.formReceta.get('cantidad').value;
        }

        let identificador = 'receta' + this.generarIdAleatorio();
        let impuesto = 0;

        recetaSeleccionada.impuestos.forEach(impuestoElement => {
            let totalImpuesto = parseInt(impuestoElement.impuesto.porcentaje) * parseFloat(recetaSeleccionada.valor) / 100;
            impuesto = impuesto + totalImpuesto;

            this.impuestos_save.push({
                'valor': totalImpuesto,
                'porcentaje': impuestoElement?.impuesto?.porcentaje,
                'cantidad': cantidad,
                'id': impuestoElement?.impuesto.id,
                'item_id': recetaSeleccionada.id,
                'tipo': '4',
                'identificador': identificador,
            });

        });

        if(this.recetasAgregadas.find(element => element.nombre == recetaSeleccionada.nombre)){
            let index = this.recetasAgregadas.findIndex(element => element.nombre == recetaSeleccionada.nombre);
            this.recetasAgregadas[index].cantidad = this.recetasAgregadas[index].cantidad + cantidad;
            // this.recetasAgregadas[index].valor = this.recetasAgregadas[index].valor + (recetaSeleccionada.valor * cantidad);

            this.recetasAgregadas[index].total = this.recetasAgregadas[index].total + ((parseFloat(recetaSeleccionada.valor) + impuesto) * cantidad);
        }

        else {

            if(index!=null){
                this.recetasAgregadas.splice(index, 0, {
                    nombre: recetaSeleccionada.nombre,
                    cantidad: cantidad,
                    subtotal: recetaSeleccionada.valor, //subtotal
                    impuestos: impuesto,
                    total: (impuesto + parseFloat(recetaSeleccionada.valor)) * Number(cantidad), //total
                    id: recetaSeleccionada.id,
                    identificador: identificador,
                    impuestosData: recetaSeleccionada.impuestos
                });
            } else {
                this.recetasAgregadas.push({
                    nombre: recetaSeleccionada.nombre,
                    cantidad: cantidad,
                    subtotal: recetaSeleccionada.valor, //subtotal
                    impuestos: impuesto,
                    total: (impuesto + parseFloat(recetaSeleccionada.valor)) * Number(cantidad), //total
                    id: recetaSeleccionada.id,
                    identificador: identificador,
                    impuestosData: recetaSeleccionada.impuestos
                })
            }
 
        }
    }

    recargarTablaProducto(producto_seleccionado: any = null, cantidad_disponible: number = null,  index:number = null) {
        let productoSeleccionado = producto_seleccionado;
        let cantidad = cantidad_disponible; 

        if(producto_seleccionado == null){
            productoSeleccionado = this.formProducto.get('producto_id')?.value;
        } 

        if(cantidad_disponible == null){
            cantidad = this.formProducto.get('cantidad').value;
        }

        let impuesto = 0;
        let identificador = 'productos' + this.generarIdAleatorio();

        productoSeleccionado?.impuestos.forEach(impuestoElement => {
            let totalImpuesto = parseInt(impuestoElement.impuesto.porcentaje) * parseFloat(productoSeleccionado.valor)  / 100;
            impuesto = impuesto + totalImpuesto;

            this.impuestos_save.push({
                'valor': totalImpuesto,
                'porcentaje': impuestoElement.impuesto.porcentaje,
                'cantidad': cantidad,
                'id': impuestoElement.impuesto.id,
                'item_id': productoSeleccionado.id,
                'tipo': '1',
                'identificador': identificador,
            });
        });

        if(this.productosAgregados?.find(element => element.nombre == productoSeleccionado?.nombre)){
            let index = this.productosAgregados?.findIndex(element => element.nombre == productoSeleccionado.nombre);
            this.productosAgregados[index].cantidad += cantidad;
            // this.productosAgregados[index].subtotal = this.productosAgregados[index].subtotal + (productoSeleccionado.valor * cantidad);
            this.productosAgregados[index].valorImpuesto += ((parseFloat(productoSeleccionado?.valor) + impuesto) * cantidad);
            // this.productosAgregados[index].impuestos = this.productosAgregados[index].impuestos + impuesto;

            this.productsData.forEach(element => { //actualiza el stock
                if(element.id == productoSeleccionado?.id){
                    if(producto_seleccionado != null){
                        element.stockActual = element.stockActualFijo - cantidad;
                    } else {
                        element.stockActual = element.stockActual - cantidad;
                    }
                }
            })
        }  else {

            if(index==null){
                this.productosAgregados.push({
                    nombre: productoSeleccionado?.nombre,
                    cantidad: Number(cantidad),
                    subtotal: parseFloat(productoSeleccionado?.valor),
                    impuestos: impuesto,
                    valorImpuesto: (parseFloat(productoSeleccionado?.valor) + impuesto) * Number(cantidad),
                    id: productoSeleccionado?.id,
                    identificador: identificador,
                    tipoProducto: productoSeleccionado?.tipo,
                    impuestosData: productoSeleccionado.impuestos
                })
            }else{
                this.productosAgregados.splice(index, 0, {
                    nombre: productoSeleccionado?.nombre,
                    cantidad: Number(cantidad),
                    subtotal: parseFloat(productoSeleccionado?.valor),
                    impuestos: impuesto,
                    valorImpuesto: (parseFloat(productoSeleccionado?.valor) + impuesto) * Number(cantidad),
                    id: productoSeleccionado?.id,
                    identificador: identificador,
                    tipoProducto: productoSeleccionado?.tipo,
                    impuestosData: productoSeleccionado.impuestos
                });
            }


            this.productsData.forEach(element => {
                if(element.id == productoSeleccionado.id){
                    if(producto_seleccionado != null){
                        element.stockActual = element.stockActualFijo - cantidad;
                    } else {
                        element.stockActual = element.stockActual - cantidad;
                    }
                 }
            })
        }

        this.stockProductoModificado = this.productosAgregados.some(producto => producto.stockModificado == true);

        this.formProducto.reset();
    }

    recargarTablaTarifa() {
        let tarifa = this.formTarifa.get('tarifa_id').value;

        this.dataTarifa = [];
        this.allTarifasDefault = [];

        tarifa.forEach(element => {
            // let identificador = 'tarifas'+this.generarIdAleatorio();

            this.dataTarifa.push({
                valor: element.valor,
                nombre: element.nombre,
                tipo: element.tipo,
                id: element.id,
                // identificador: identificador,
            });

            this.allTarifasDefault.push(
                {
                    valor: element.valor,
                    nombre: element.nombre,
                    tipo: element.tipo,
                    id: element.id,
                    // identificador: identificador,
                }
            );
        });

    }

    recargarTablaAbonos() {
        let metodoPago = this.formMetodoPago.get('metodo_pago_id').value[0];
        let valor = parseFloat(this.formMetodoPago.get('valor').value);

        this.dataAbonos.push({
            valor: valor,
            nombre: metodoPago.nombre,
            id: metodoPago.id,
            metodo_pago_id: metodoPago.id,
            identificador: 'abonos' + this.generarIdAleatorio(),
        })

    }

    submitAbono() {
        this.abonoVisible = false;
        this.recargarTablaAbonos();
        this.recalcular();
    }

    submitAll() {
        if (this.estadoHabitacion?.estado_id == 2) {

            let guardar = {
                tarifas: this.dataTarifa,
                productos: this.productosAgregados,
                abonos: this.dataAbonos,
                detalleId: this.detalleId,
                hotelId: this.hotelId,
                clienteId: this.clienteId,
                receta: this.recetasAgregadas,

                //  impuesto: this.impuestos_save,
                habitacion_id: this.habitacionId
            }

            this.envirRoomDetalle(guardar);
        }
    }

    envirRoomDetalle(data: any) {
        this.spinner.show();

        this.dashboardRoomsService.saveDetalleHabitacion(data).subscribe(response => {

            this.spinner.hide();

            let data: any = response;

            if (data.code == "success") {
                Swal.fire({
                    title: "Exito",
                    text: data.msm,
                    icon: "success"
                });
                this.layoutService.reloadComponent();

                this.router.navigate(['dashboard/dashboardRooms']);

            } else if (data.code == "warning") {

                Swal.fire({
                    title: "Advertencia",
                    text: data.msm,
                    icon: "warning"
                });
                const productos_sin_stock = data.productos_sin_stock;
                let valorImpuesto = 0;

                this.stockProductoModificado = true;

                productos_sin_stock?.forEach(productoSinStock => {
                    this.productsData.forEach(productInData => {
                        if(productInData.id == productoSinStock.id){
                            productInData.stockActual = 0;
                            valorImpuesto = productInData.valor_total;
                        }
                    })
                    this.productosAgregados.forEach(productoSeleccionado => {
                        if (productoSeleccionado.id == productoSinStock.id){
                            productoSeleccionado.cantidad = productoSinStock.cantidad_actual;
                            productoSeleccionado.valorImpuesto = productoSinStock.cantidad_actual * valorImpuesto
                            productoSeleccionado.stockModificado = true;
                        }
                    })
                });
                this.recalcular();
            } else {

                Swal.fire({
                    title: "Error",
                    text: "Error al anular.",
                    icon: "error"
                });
            }
        })
    }

    envirRoomDetalleFactura(data: any) {
        this.spinner.show();

        this.dashboardRoomsService.saveDetalleHabitacion(data).subscribe(response => {

            if (response.code == "warning") {

                Swal.fire({
                    title: "Advertencia",
                    text: response.msm,
                    icon: "warning"
                });

                this.spinner.hide();
                this.facturarVisible = false;
            } else {
                let isFacturaElectronica = this.formFacturar.get('isFacturaElectronica').value;

                let guardar = {
                    detalle_id: this.detalleId,
                    metodos_pagos: this.formFacturacionMediosPago.value,
                    concepto: 'Factura Habitacion',
                    hotel_id: this.hotelId,
                    cliente_id: this.clienteId,
                    porcentaje_descuento: 0,
                    subtotal: this.subtotaltotal,
                    total: this.total + this.abonosTotal,
                    impuesto_total: this.totalImpuestos,
                    detalleId: this.detalleId,
                    hotelId: this.hotelId,
                    clienteId: this.clienteId,
                    receta: this.recetasAgregadas,
                    impuesto: this.impuestos_save,
                    habitacion_id: this.habitacionId,
                    is_factura_electronica: isFacturaElectronica,
                    excedente: this.excedente
                }

                this.enviarFacturacion(guardar);
            }

        })
    }

    desocuparHabitacion() {

        let parametros = {
            id_habitacion: this.habitacionId,
        };

        Swal.fire({
            title: "¿Estas seguro que deseas Salir (Check-out) de esta habitacion?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, Confirmar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                this.spinner.show();

                this.enviarDesocupar(parametros);
            }
        });

    }

    facturacion() {
        this.facturarVisible = true;
    }

    enviarDesocupar(parametros) {
        this.dashboardRoomsService.desocupar(parametros).subscribe(
            (response: any) => {
                let data = response;
                this.spinner.hide();

                if (data.code == "success") {
                    Swal.fire({
                        title: "Exito",
                        text: "Anulacion Exitosa.",
                        icon: "success"
                    });

                    this.router.navigate(['dashboard/dashboardRooms']);

                } else if (data.code == "warning") {
                    Swal.fire({
                        title: "Advertencia",
                        text: data.error,
                        icon: "warning"
                    });
                } else {
                    Swal.fire({
                        title: "Error",
                        text: "Error al anular.",
                        icon: "error"
                    });
                }
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    validaciones() {

        this.disableFactura = false;

        if (this.abonosTotal > this.tarifasTotal) {
            this.disableFactura = true;
            this.cargarItems();
        }
    }

    eliminarMedioPagoAbono(index: number) {
        this.formFacturacionMediosPago.removeAt(index);
        this.calcularTotalMetodosPago();
    }

    agregarAbonoOcupar(event) {

        console.log('event', event)

        if(this.formFacturacionMediosPago.controls.find(control => control.get('medio_pago').value.id == event.value.id)){
            return;
        }

        let form = this.FB.group({
            monto: ['', [Validators.required, Validators.min(1)]],
            medio_pago: [ event.value, [Validators.required, Validators.min(1)]],
            nombre: [event.value.nombre, []]
        });

        //inhabilita el control nombre de form
        form.get('nombre').disable();

        this.formFacturacionMediosPago.push(
            form
        )
    }

    calcularTotalMetodosPago() {
        this.totalMetodosPago = 0;

        this.formFacturacionMediosPago.value.forEach(element => {

            let monto = parseFloat(element.monto)

            if(isNaN(monto)){
                monto = 0
            }

            this.totalMetodosPago += monto
        })

    }

    submitFactura() {

        let guardarRoom = {
            tarifas: this.dataTarifa,
            productos: this.productosAgregados,
            abonos: this.dataAbonos,
            detalleId: this.detalleId,
            hotelId: this.hotelId,
            clienteId: this.clienteId,
            receta: this.recetasAgregadas,
            impuesto: this.impuestos_save,
            habitacion_id: this.habitacionId,
        }

        this.envirRoomDetalleFactura(guardarRoom);


    }


    enviarFacturacion(parametros) {
        this.spinner.show();

        this.dashboardRoomsService.facturar(parametros).subscribe(
            (response: any) => {
                let data = response;
                this.facturarVisible = false;
                this.spinner.hide();

                if (data.code == "success") {
                    this.layoutService.reloadComponent();

                    Swal.fire({
                        title: "Exito",
                        text: data.msm,
                        icon: "success"
                    });

                    let factura = data.factura;

                    let factura_id = factura.id;

                    let url = this.baseUrl + '/facturaRemisionPdf/' + factura_id + '?token=' + this.token;

                    window.open(url, '_blank');

                    this.router.navigate(['dashboard/dashboardRooms']);

                } else if (data.code == "warning") {
                    Swal.fire({
                        title: "Advertencia",
                        text: data.msm,
                        icon: "warning"
                    });
                } else {
                    Swal.fire({
                        title: "Error",
                        text: "Error al Facturar.",
                        icon: "error"
                    });
                }
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }


    generarIdAleatorio(): string {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const longitud = 10;
        let id = '';
        for (let i = 0; i < longitud; i++) {
            id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }

        return id;
    }

    changeCantidadProducto(producto: any, event){
        let cantidad = parseInt((event.target as HTMLInputElement).value);
        let producto_id = producto.id;
        let producto_seleccionado = null;

        this.productsData.forEach(element => {
            if (element.id == producto_id) { 
              producto_seleccionado = element;
           }
       });
       let index = this.productosAgregados.findIndex(element => element.id == producto_id);

       this.productosAgregados = this.productosAgregados.filter(element => element.id != producto_id);
        
       this.recargarTablaProducto(producto_seleccionado, cantidad, index);
       this.recalcular();
    }
 
    changeCantidadReceta(receta: any, event){
        let cantidad = parseInt((event.target as HTMLInputElement).value);
        let receta_id = receta.id;
        let receta_seleccionado = null;

        this.recetasData.forEach(element => {
            if (element.id == receta_id){ 
                receta_seleccionado = element;
            }
       });

       let index = this.recetasAgregadas.findIndex(element => element.id == receta_id);
 
       this.recetasAgregadas = this.recetasAgregadas.filter(element => element.id != receta_id);
       this.recargarTablaReceta(receta_seleccionado, cantidad, index);
       this.recalcular();
    }

    getCantidadMaximaProducto(producto: any){
         console.log('lol2', this.productsData)

        let producto_id = producto.id;
 
        let stock = 1;
        this.productsData.forEach(element => {
             if (element.id == producto_id){
               stock = element.stockActualFijo;
            }
        });
 
        return stock;
    }

}
