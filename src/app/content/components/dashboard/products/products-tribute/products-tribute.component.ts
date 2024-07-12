import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ex } from '@fullcalendar/core/internal-common';
import { NgxSpinnerService } from 'ngx-spinner';
import { TreeNode } from 'primeng/api';
import { Products, ProductDetalle } from 'src/app/content/models/dashboard/products.model';
import { AuthService } from 'src/app/content/service/auth.service';
import { ProductsService } from 'src/app/content/service/dashboard/products.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-products-tribute',
    templateUrl: './products-tribute.component.html',
    styleUrls: ['./products-tribute.component.scss']
})
export class ProductsTributeComponent {
    public permisoDetalle = AuthService.hasPermission(['gestionInventario.productos.detalle']);
    public permisoImpuesto = AuthService.hasPermission(['gestionInventario.productos.impuestoProducto']);

    id: number;
    loadingTable: boolean = true;

    //impuestos producto
    impuestosData: any[] = [];
    impuestoModalCrear: boolean = false;
    formCreate: FormGroup;
    impuestos: any;

    //detalles producto
    form: FormGroup
    formCreateDetalle: FormGroup;
    productsData: Products;
    dataDetails: ProductDetalle[] = [];
    productoModalAgregar: boolean = false;
    tipo_operacion: any[];
    ultimoIngresado: ProductDetalle;

    // Variables para paginación de detalles de productos
    pageActualDetalles: number = 1;
    pageCountDetalles: number = 10; //Modificar para mostrar cantidad de
    ultimaPageDetalles: number;
    registrosContarDetalles: number;
    disablePageLeftDetalles: boolean = false;
    disablePageRightDetalles: boolean = false;

    // Variables para paginación de impuestos
    pageActualImpuestos: number = 1;
    pageCountImpuestos: number = 10;
    ultimaPageImpuestos: number;
    registrosContarImpuestos: number;
    disablePageLeftImpuestos: boolean = false;
    disablePageRightImpuestos: boolean = false;

    //Buscador
    public formSearch: FormGroup;

    constructor(
        private FB: FormBuilder,
        private productsService: ProductsService,
        private spinner: NgxSpinnerService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.impuestosData = [];

        this.route.params.subscribe(params => {
            this.id = params['id'];
        });

        this.formCreate = this.FB.group({
            impuesto: ['', Validators.required]
        });

        setTimeout(() => {
            this.loadImpuesto();
        });

        this.buildForm();
        this.pageActualDetalles = 1; // Inicializa la página actual
        this.getDetallesProducto(this.id, this.pageCountDetalles, this.pageActualDetalles);
    }

    // Construye el formulario de detalles del producto
    buildForm() {
        this.formSearch = this.FB.group({
            search: ['', []],
        });

        this.form = this.FB.group({
            nombreProducto: ['', []],
            precio: ['', []],
            cantidad: ['', []],
            medida: ['', []],
        });

        this.form.get('nombreProducto').disable();
        this.form.get('precio').disable();
        this.form.get('cantidad').disable();
        this.form.get('medida').disable();

        this.formCreateDetalle = this.FB.group({ // formulario para agregar producto
            cantidad: ['', Validators.required]
        });
    }

    // Obtiene los detalles del producto
    getDetallesProducto(id: number, perPage: number = this.pageCountDetalles, page: number = 1, search: string = '') {
        this.spinner.show();
        this.loadingTable = true;
        this.productsService.getDetallesProducto(id, perPage, page, search).subscribe(
            (response: any) => {
                this.spinner.hide();
                this.loadingTable = false;
                this.productsData = response.producto; // producto en general
                this.dataDetails = response.detalles.data; // detalles del producto que se muestran en la tabla
                this.tipo_operacion = response.tipo_operacion;

                // Actualizar los valores de paginación
                this.ultimaPageDetalles = response.detalles.last_page;
                this.registrosContarDetalles = response.detalles.total;
                this.pageActualDetalles = page; // Actualiza la página actual
                this.validatePageDetalles();

                // convierte el precio a formato de moneda
                const precioFormateado = Number(this.productsData.precio).toLocaleString('es-CO');

                // setea los valores en el formulario
                this.form.get('nombreProducto').setValue(this.productsData.nombre.charAt(0).toUpperCase() + this.productsData.nombre.slice(1).toLowerCase());
                this.form.get('precio').setValue(`$${precioFormateado}`);
                this.form.get('cantidad').setValue(this.productsData.cantidad);

                let medidas = response.medida; // obtiene la medida del producto
                medidas.forEach(medida => {
                    if (medida.id == this.productsData.medida_id) {
                        this.form.get('medida').setValue(medida.nombre);
                    }
                });

                // Asignar el registro más reciente
                this.ultimoIngresado = response.registro_reciente;
            },
            (error) => {
                this.spinner.hide();
                this.loadingTable = false;
                console.log('Error: ', error);
            }
        );
    }

    // Buscador productos
    searchInputDetalles() {
        let search = this.formSearch.get('search').value;
        this.pageActualDetalles = 1; // Reset page to 1 when searching
        if (search == "") {
            this.getDetallesProducto(this.id, this.pageCountDetalles, this.pageActualDetalles, search);
        }
    }

    searchDetalles() {
        let search = this.formSearch.get('search').value;
        this.pageActualDetalles = 1; // Reset page to 1 when searching
        this.getDetallesProducto(this.id, this.pageCountDetalles, this.pageActualDetalles, search);
    }

    onPageDetalles(event) {
        this.pageActualDetalles = event.page + 1; // Adjust for PrimeNG pagination
        this.pageCountDetalles = event.rows;
        this.getDetallesProducto(this.id, this.pageCountDetalles, this.pageActualDetalles, this.formSearch.get('search').value);
    }

    buscarPorTeclaDetalles($event) {
        if ($event.code == 'Enter') {
            this.searchDetalles();
        }
    }

    // Paginador productos
    leftTableDetalles() {
        this.pageActualDetalles--;
        this.getDetallesProducto(this.productsData.id, this.pageCountDetalles, this.pageActualDetalles);
        this.validatePageDetalles();
    }

    rightTableDetalles() {
        this.pageActualDetalles++;
        this.getDetallesProducto(this.productsData.id, this.pageCountDetalles, this.pageActualDetalles);
        this.validatePageDetalles();
    }

    validatePageDetalles() {
        if (this.pageActualDetalles == 1) {
            this.disablePageLeftDetalles = false;
        } else {
            this.disablePageLeftDetalles = true;
        }

        if (this.pageActualDetalles >= this.ultimaPageDetalles) {
            this.disablePageRightDetalles = false;
        } else {
            this.disablePageRightDetalles = true;
        }
    }

    // Agrega más existencias al producto
    public agregarProducto() {

        const detalle = {
            producto_id: this.id,
            cantidad: this.formCreateDetalle.get('cantidad').value
        }

        this.productsService.createDetalle(detalle).subscribe(
            (response: any) => {
                if (response.code == 'success') {
                    this.productoModalAgregar = false;

                    this.getDetallesProducto(this.id);
                    Swal.fire({
                        title: "Exito",
                        text: 'Producto agregado correctamente',
                        icon: "success"
                    });
                    this.formCreateDetalle.reset();
                } else {
                    this.productoModalAgregar = false;
                    Swal.fire({
                        title: "Error",
                        text: 'No se pudo agregar el producto',
                        icon: "error"
                    });
                }
            }
        )
    }

    // Elimina un producto
    public eliminarProducto(id: number) {
        Swal.fire({
            title: "Advertencia",
            text: "¿Está seguro de eliminar éste registro?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                const detalle = {
                    id: id
                }
                this.productsService.deleteDetalle(detalle).subscribe(
                    (response: any) => {
                        if (response.code == 'success') {
                            this.getDetallesProducto(this.id);
                            Swal.fire({
                                title: "Exito",
                                text: 'Producto eliminado correctamente',
                                icon: "success"
                            });
                        } else {
                            Swal.fire({
                                title: "Error",
                                text: 'No se pudo eliminar el producto',
                                icon: "error"
                            });
                        }
                        (error) => console.log('Error: ', error)
                    }
                )
            }
        });
    }

    // Define el tipo de operacion dependiendo del estado
    public operacion(estado: number) {
        if (estado == 2) {
            return "Ingresado"
        }
        else if (estado == 3) {
            return "Consumido"
        }
        else if (estado == 0) {
            return "Anulado"
        }

        return "Operacion no identificada";
    }

    // Define el nombre del tipo de operacion
    public tipo_operacion_name(tipo_operacion_id: number) {
        let tipo = this.tipo_operacion.filter(operacion => operacion.id == tipo_operacion_id);
        return tipo[0].nombre;
    }

    // Define el color de la operacion dependiendo del estado
    getColor(estado: number) {
        switch (this.operacion(estado)) {
            case 'Ingresado':
                return '#52D328';
            case 'Consumido':
                return 'red';
            default:
                return 'black';
        }
    }

    // Define el total disponible del producto
    public totalDisponible() {
        let total = 0;
        this.dataDetails.forEach(element => {
            if (element.estado == 2) {
                total += element.cantidad;
            }
            else if (element.estado == 3) {
                total -= element.cantidad;
            }
        });

        return this.productsData?.sin_limite_cantidad==1?total:'Ilimitado';
    }

    submitCreate() {
        this.impuestoModalCrear = false;

        let existe = this.impuestosData.filter(element => element?.id == this.formCreate.get('impuesto').value['id']);

        if (existe.length == 0) {
            this.impuestosData.push({
                nombre: this.formCreate.get('impuesto').value['nombre'],
                porcentaje: this.formCreate.get('impuesto').value['porcentaje'],
                id: this.formCreate.get('impuesto').value['id'],
            })
        } else {
            Swal.fire({
                title: "Advertecia",
                text: "El Impuesto ya fue agregado.",
                icon: "warning"
            });
        }

    }

    openModalCrear() {
        this.impuestoModalCrear = true;
        this.getImpuestoCrear();
    }

    openModalAgregar() {
        this.productoModalAgregar = true;
    }

    onChangeCreateImpuesto() {

    }

    confirmDelete(id: number) {
        this.impuestosData = this.impuestosData.filter(element => element.id != id);
    }

    // Paginador Impuestos
    loadImpuesto(perPage: number = this.pageCountImpuestos, page: number = 1, search: string = '') {
        this.productsService.getImpuesto(this.id, perPage, page, search).subscribe(
            (response: any) => {
                this.impuestosData = response.impuestoProducto.data.map((element: any) => ({
                    nombre: element.impuesto.nombre,
                    porcentaje: element.impuesto.porcentaje,
                    id: element.impuesto_id,
                }));

                this.ultimaPageImpuestos = response.impuestoProducto.last_page;
                this.registrosContarImpuestos = response.impuestoProducto.total;
                this.validatePageImpuestos();
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    // Buscador impuestos

    searchInputImpuestos() {
        let search = this.formSearch.get('search').value;
        this.pageActualImpuestos = 1; // Reset page to 1 when searching
        if (search == "") {
            this.loadImpuesto(this.pageCountImpuestos, this.pageActualImpuestos, search);
        }
    }

    searchImpuestos() {
        let search = this.formSearch.get('search').value;
        this.pageActualImpuestos = 1; // Reset page to 1 when searching
        this.loadImpuesto(this.pageCountImpuestos, this.pageActualImpuestos, search);
    }

    onPageImpuestos(event) {
        this.pageActualImpuestos = event.page + 1; // Adjust for PrimeNG pagination
        this.pageCountImpuestos = event.rows;
        this.loadImpuesto(this.pageCountImpuestos, this.pageActualImpuestos, this.formSearch.get('search').value);
    }

    buscarPorTeclaImpuestos($event) {
        if ($event.code == 'Enter') {
            this.searchImpuestos();
        }
    }

    // Paginador impuestos

    leftTableImpuestos() {
        this.pageActualImpuestos--;
        this.loadImpuesto(this.pageCountImpuestos, this.pageActualImpuestos);
        this.validatePageImpuestos();
    }

    rightTableImpuestos() {
        this.pageActualImpuestos++;
        this.loadImpuesto(this.pageCountImpuestos, this.pageActualImpuestos);
        this.validatePageImpuestos();
    }

    validatePageImpuestos() {
        if (this.pageActualImpuestos == 1) {
            this.disablePageLeftImpuestos = false;
        } else {
            this.disablePageLeftImpuestos = true;
        }

        if (this.pageActualImpuestos >= this.ultimaPageImpuestos) {
            this.disablePageRightImpuestos = false;
        } else {
            this.disablePageRightImpuestos = true;
        }
    }

    getImpuestoCrear() {
        this.spinner.show();
        this.productsService.getImpuestoCrear().subscribe(
            (response: any) => {
                this.spinner.hide();
                this.impuestos = response.impuestos;
            }
        )
    }

    saveImpuesto(element: any) {
        this.productsService.createImpuesto(element).subscribe(Response => {
            if (Response.val) {
                Swal.fire({
                    title: "Exito",
                    text: Response.msm,
                    icon: "success"
                });
                this.router.navigate(['/dashboard/products']);

            } else {
                Swal.fire({
                    title: "Error",
                    text: Response.msm,
                    icon: "error"
                });
            }
        })
    }

    enviarImpuesto() {

        // if( this.impuestosData.length > 0){
        let element = {
            impuestos: this.impuestosData,
            id: this.id,
        };

        this.saveImpuesto(element);
        //  }
    }
}
