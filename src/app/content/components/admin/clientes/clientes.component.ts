import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Clientes } from 'src/app/content/models/admin/clientes.model';
import { ClientesService } from 'src/app/content/service/clientes/clientes.service';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';
import { AuthService } from 'src/app/content/service/auth.service';
import { Router } from '@angular/router';


interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
    public permisoCrear = AuthService.hasPermission(['administracion.clientes.crear']);
    public permisoActualizar = AuthService.hasPermission(['administracion.clientes.actualizar']);
    public permisoEliminar = AuthService.hasPermission(['administracion.clientes.eliminar']);

    public clientesData: Clientes[];
    public loadingTable: boolean = false;
    public formCreateClientes: FormGroup;
    public formSearch: FormGroup;
    public formEditClientes: FormGroup;
    public visibleModalClientes: boolean = false;
    public visibleModalClientesEditar: boolean = false;
    public idEditando: number = 0;
    public visibleServicio: boolean = true;
    public visibleServicioEditar: boolean = true;
    public editarData: any;

    //Variables para localizacion
    public countries$: any[] = [];
    public states$: any[] = [];
    public cities$: any[] = [];
    public selectedCountry: any;
    public selectedState: any;
    public selectedCity: any;

    //Variables formularios
    public hotel: any[];
    public nombres: string;
    public apellidos: string;
    public celular: string;
    public telefono: string;
    public tipoDocumento: any[];
    public numeroDocumento: string;
    public genero: any[];
    public estadoCivil: any[];
    public ciudad: any[];
    public barrio: string;
    public fechaNacimiento: string;
    public nivelEstudio: any[];
    public correo: string;
    public observacion: string;
    public tipo: any[];

    //Paginador
    public pageCount: number = 10;
    public pageActual: number = 1;
    public ultimaPage: number = 1;
    public disablePageLeft: boolean = false;
    public disablePageRight: boolean = false;
    public registrosContar: number = 0;
    public first: number = 0;
    public rows: number = 8;

    @Input() vieneDeHabitaciones: boolean;
    @Output() clienteCreado = new EventEmitter<boolean>();
    public eventoEmitido: boolean = false;

    ngOnInit(): void {
        this.buildForm();
        if (this.vieneDeHabitaciones) {
            this.spinner.hide();
            this.onCreate();
        }
        this.getIndex();
        // Consultar Paises
        this.clientesService.getCountries().subscribe(response => {
            this.countries$ = response;
        });

        // Consultar Estados
        this.clientesService.getStates(12).subscribe(response => {
            this.states$ = response;
        }, error => {
            console.log('Error:', error);
        });

        // Consultar CIudades
        this.clientesService.getCities(1).subscribe(response => {
            this.cities$ = response;
        }, error => {
            console.log('Error:', error);
        });
    }

    constructor(
        private clientesService: ClientesService,
        private FB: FormBuilder,
        private spinner: NgxSpinnerService,
        private router: Router
    ) {

    }

    getIndex(search: string = '', pageCount: number = this.pageCount, page: number = 1) {
        this.spinner.show();
        this.loadingTable = true;
        this.clientesService.getAll(pageCount, search, page).subscribe(
            (response: any) => {
                this.loadingTable = false;
                this.clientesData = response.data;
                this.ultimaPage = response.last_page;
                this.registrosContar = response.total;
                this.ultimaPage = response.last_page;
                if (response.total > pageCount) {
                    this.disablePageRight = true;
                }
                this.validatePage();
                this.spinner.hide();
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    buildForm() {

        this.formSearch = this.FB.group({
            search: ['', []],
        });

        this.formCreateClientes = this.FB.group({
            hotel_id: ['', [Validators.required]],
            nombres: ['', [Validators.required]],
            apellidos: ['', [Validators.required]],
            tipo_documento: ['', [Validators.required]],
            numero_documento: ['', [Validators.required]],
            genero: ['', [Validators.required]],
            estado_civil: ['', [Validators.required]],
            ciudad_id: ['', [Validators.required]], // Mantenemos 'ciudad_id' aquí
            barrio_residencia: ['', [Validators.required]],
            telefono: ['', []],
            celular: ['', [Validators.required]],
            fecha_nacimiento: ['', [Validators.required]],
            nivel_estudio: ['', [Validators.required]],
            tipo: ['', [Validators.required]],
            correo: ['', [Validators.required, Validators.email]],
            observacion: ['', []]
        });

        this.formEditClientes = this.FB.group({
            hotel_id: ['', [Validators.required]],
            nombres: ['', [Validators.required]],
            apellidos: ['', [Validators.required]],
            tipo_documento: ['', [Validators.required]],
            numero_documento: ['', [Validators.required]],
            genero: ['', [Validators.required]],
            estado_civil: ['', [Validators.required]],
            ciudad_id: ['', [Validators.required]], // Mantenemos 'ciudad_id' aquí
            barrio_residencia: ['', [Validators.required]],
            telefono: ['', []],
            celular: ['', [Validators.required]],
            fecha_nacimiento: ['', [Validators.required]],
            nivel_estudio: ['', [Validators.required]],
            tipo: ['', [Validators.required]],
            correo: ['', [Validators.required, Validators.email]],
            observacion: ['', []]
        });

    }


    //CREAR

    openModal() {
        this.onCreate();
    }

    cerrarModalCrear() {
        if(!this.vieneDeHabitaciones){
            return
        }
        if (this.vieneDeHabitaciones && !this.eventoEmitido) {
            this.clienteCreado.emit(false);
        }
    }

    onCreate() {
        this.formCreateClientes.reset();
        this.clientesService.getClientes(0).subscribe(
            (response: any) => {
                this.hotel = response.hotel;
                this.tipoDocumento = response.tipo_documento;
                this.genero = response.genero;
                this.estadoCivil = response.estado_civil;
                this.nivelEstudio = response.nivel_estudio;
                this.tipo = response.tipo;

                this.formCreateClientes.reset();
                this.visibleServicio = true;
                this.formCreateClientes.get('tipo_documento').enable();
                this.visibleModalClientes = true
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    submitCreate() {
        if (this.formCreateClientes.valid) {
            // Actualiza el valor de fecha_nacimiento en el formulario
            const fechaFinalFormatted = this.formatDate(this.formCreateClientes.get('fecha_nacimiento').value);
            this.formCreateClientes.get('fecha_nacimiento').setValue(fechaFinalFormatted);
            // Continúa con la creación del cliente
            this.newClientes();
        } else {
            this.formCreateClientes.markAllAsTouched();
        }
    }

    //Formate de fechas

    formatDate(dateString: string): string {
        const date = new Date(dateString);
        // Obtiene los componentes de la fecha (año, mes, día, hora, minuto, segundo) en el huso horario local
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const hour = ('0' + date.getHours()).slice(-2);
        const minute = ('0' + date.getMinutes()).slice(-2);
        const second = ('0' + date.getSeconds()).slice(-2);
        // Crea la cadena de fecha en el formato deseado (YYYY-MM-DD HH:MM:SS)
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }

    newClientes() {
        this.formCreateClientes.get('ciudad_id').setValue(this.selectedCity ? this.selectedCity.id : null);
        this.spinner.show();
        let dataClientes = this.formCreateClientes.value;

        dataClientes.hotel_id = dataClientes.hotel_id['id'];
        dataClientes.ciudad_id = dataClientes.ciudad_id['id'];
        dataClientes.tipo = dataClientes.tipo['id'];
        dataClientes.estado = 1;

        if (dataClientes.tipo != 2) {
            dataClientes.tipo_documento = dataClientes.tipo_documento.id;
            dataClientes.genero = dataClientes.genero['id'];
            dataClientes.estado_civil = dataClientes.estado_civil['id'];
            dataClientes.apellidos = dataClientes.apellidos;
            dataClientes.fecha_nacimiento = dataClientes.fecha_nacimiento;
            dataClientes.nivel_estudio = dataClientes.nivel_estudio['id'];
        } else {
            dataClientes.genero = 0;
            dataClientes.estado_civil = 0;
            delete dataClientes.apellidos;
            delete dataClientes.fecha_nacimiento; // No enviar fecha_nacimiento
            dataClientes.nivel_estudio = 0;
            dataClientes.tipo_documento = 32;
        }


        this.clientesService.createClientes(dataClientes).subscribe(
            (response: any) => {
                this.spinner.hide();
                this.eventoEmitido = true;
                this.visibleModalClientes = false;
                if (response.code == 'success') {
                    Swal.fire({
                        title: 'Exito',
                        text: 'Huésped creado exitosamente.',
                        icon: 'success',
                        timer: 1500,
                        showConfirmButton: false
                    }).then(() => {
                        if (this.vieneDeHabitaciones) {
                            this.clienteCreado.emit(true);
                        } else {
                            this.getIndex();
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error al crear el huésped.',
                        icon: 'error',
                    });
                }
            },
            (error) => {
                console.log('Error:', error);
                // Handle error here
            }
        );
    }

    //Editar

    editClientes(id: number) {
        this.idEditando = id;
        this.spinner.show();
        this.clientesService.getClientes(id).subscribe(
            (response: any) => {
                this.spinner.hide();
                this.hotel = response.hotel;
                this.estadoCivil = response.estado_civil;
                this.genero = response.genero;
                this.nivelEstudio = response.nivel_estudio;
                this.tipoDocumento = response.tipo_documento;
                this.tipo = response.tipo;
                const cliente = response.cliente;

                this.editarData = response.cliente;

                let hotel: any = null;
                let estadoCivil: any = null;
                let genero: any = null;
                let nivelEstudio: any = null;
                let tipoDocumento: any = null;
                let tipo: any = null;

                this.hotel.forEach((value) => {
                    if (value.id == cliente.hotel_id) {
                        hotel = value;
                    }
                })

                this.estadoCivil.forEach((value) => {
                    if (value.id == cliente.estado_civil_id) {
                        estadoCivil = value;
                    }
                })

                this.genero.forEach((value) => {
                    if (value.id == cliente.genero_id) {
                        genero = value;
                    }
                })

                this.nivelEstudio.forEach((value) => {
                    if (value.id == cliente.nivel_studio_id) {
                        nivelEstudio = value;
                    }
                })

                this.tipoDocumento.forEach((value) => {
                    if (value.id == cliente.tipo_documento_id) {
                        tipoDocumento = value;
                    }
                })

                this.tipo.forEach((value) => {
                    if (value.id == cliente.tipo) {
                        tipo = value;
                    }
                })

                setTimeout(() => {

                    this.formEditClientes.patchValue({
                        hotel_id: hotel,
                        nombres: cliente.nombres,
                        apellidos: cliente.apellidos,
                        tipo_documento: tipoDocumento,
                        numero_documento: cliente.numero_documento,
                        genero: genero,
                        estado_civil: estadoCivil,
                        ciudad_id: cliente.ciudad_id,
                        barrio_residencia: cliente.barrio_residencia,
                        telefono: cliente.telefono,
                        celular: cliente.celular,
                        fecha_nacimiento: cliente.fecha_nacimiento!=null?new Date(cliente.fecha_nacimiento):null,
                        nivel_estudio: nivelEstudio,
                        tipo: tipo,
                        correo: cliente.correo,
                        observacion: cliente.observacion
                    });


                    // LLamamos la función para ocultar campos
                    this.onChangeTipoClienteEditar();

                    // Mostrar el modal de edición
                    this.visibleModalClientesEditar = true;

                    if(cliente.fecha_nacimiento==null){
                       this.formEditClientes.get('fecha_nacimiento').reset();
                    }

                }, 1);
            },
            (error) => {
                console.log('Error: ', error);
            }
        );

    }

    updateClientes() {

        this.spinner.show();
        let dataCliente = this.formEditClientes.value;
        dataCliente.hotel_id = dataCliente.hotel_id['id'];
        dataCliente.tipo = dataCliente.tipo['id'];
        dataCliente.ciudad_id = Number(dataCliente.ciudad_id['id']);
        dataCliente.estado = 1;
        dataCliente.id = this.idEditando;

        if (dataCliente.tipo != 2) {
            dataCliente.tipo_documento = dataCliente.tipo_documento['id'];
            dataCliente.genero = dataCliente.genero['id'];
            dataCliente.estado_civil = dataCliente.estado_civil['id'];



            dataCliente.fecha_nacimiento = this.formatDate(new Date(dataCliente.fecha_nacimiento).toISOString());
            dataCliente.nivel_estudio = dataCliente.nivel_estudio['id'];
        } else {
            dataCliente.genero = 3;
            dataCliente.estado_civil = 9;
            delete dataCliente.apellidos;
            delete dataCliente.fecha_nacimiento;
            dataCliente.nivel_estudio = 8;
            dataCliente.tipo_documento = 32;
        }

        const formData = new FormData();

        for (const i in dataCliente) {
            if (dataCliente.hasOwnProperty(i)) {
                formData.append(i, dataCliente[i]);
            }
        }

        this.clientesService.updateClientes(formData).subscribe(
            (response: any) => {
                this.spinner.hide();
                this.visibleModalClientesEditar = false;
                if (response.code == "success") {

                    Swal.fire({
                        title: "Exito",
                        text: "Huésped actualizado exitosamente.",
                        icon: "success"
                    })

                    this.getIndex();

                } else {

                    Swal.fire({
                        title: "Error",
                        text: "Error al actualizar el huésped.",
                        icon: "error"
                    });

                }

            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    submitUpdate() {
        if (this.formEditClientes.valid) {
            this.updateClientes();
        }
    }

    //Eliminar
    confirmDelete(id: number) {
        Swal.fire({
            title: "¿Estas seguro que deseas eliminar este huésped?",
            text: "Ten cuidado esta acción no se prodrá reversar",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, Confirmar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                this.spinner.show();
                this.clientesService.deleteClientes({ id }).subscribe(
                    (response: any) => {
                        this.spinner.hide();
                        if (response.code == "success") {

                            Swal.fire({
                                title: "Exito",
                                text: "Huésped eliminado exitosamente.",
                                icon: "success"
                            });

                            this.getIndex();

                        } else {

                            Swal.fire({
                                title: "Error",
                                text: "Error al eliminar el huésped.",
                                icon: "error"
                            });

                        }

                    },
                    (error) => {
                        console.log('Error: ', error);
                    }
                );
            }
        });
    }

    //Ocultar campos redundantes de crear

    onChangeTipoClienteCrear() {
        let tipo_persona = this.formCreateClientes.get('tipo').value;

        // Actualizar las etiquetas basadas en el tipo de persona

        if (tipo_persona.id == 1) {
            this.visibleServicio = true;

            this.formCreateClientes.get('tipo_documento').reset();
            this.formCreateClientes.get('tipo_documento').enable();

            this.formCreateClientes.get('apellidos').setValidators([Validators.required]);
            this.formCreateClientes.get('fecha_nacimiento').setValidators([Validators.required]);
            this.formCreateClientes.get('genero').setValidators([Validators.required]);
            this.formCreateClientes.get('estado_civil').setValidators([Validators.required]);
            this.formCreateClientes.get('nivel_estudio').setValidators([Validators.required]);
        }

        if (tipo_persona.id == 2) {

            this.visibleServicio = false;

            this.formCreateClientes.get('apellidos').clearValidators();
            this.formCreateClientes.get('fecha_nacimiento').clearValidators();
            this.formCreateClientes.get('genero').clearValidators();
            this.formCreateClientes.get('estado_civil').clearValidators();
            this.formCreateClientes.get('nivel_estudio').clearValidators();

            this.formCreateClientes.get('apellidos').updateValueAndValidity();
            this.formCreateClientes.get('fecha_nacimiento').updateValueAndValidity();
            this.formCreateClientes.get('genero').updateValueAndValidity();
            this.formCreateClientes.get('estado_civil').updateValueAndValidity();
            this.formCreateClientes.get('nivel_estudio').updateValueAndValidity();

            this.formCreateClientes.get('tipo_documento').setValue(this.tipoDocumento[4]);
            this.formCreateClientes.get('tipo_documento').disable()
        }
    }

    //Ocultar campos redundantes de editar
    onChangeTipoClienteEditar() {
        let tipo_persona = this.formEditClientes.get('tipo').value;

        // Actualizar las etiquetas basadas en el tipo de persona

        if (tipo_persona.id == 1) {
            this.visibleServicioEditar = true;

            this.formEditClientes.get('tipo_documento').setValue( this.tipoDocumento.find((value) => value.id == this.editarData.tipo_documento_id));
            this.formEditClientes.get('tipo_documento').enable()

            this.formEditClientes.get('apellidos').setValidators([Validators.required]);
            this.formEditClientes.get('fecha_nacimiento').setValidators([Validators.required]);
            this.formEditClientes.get('genero').setValidators([Validators.required]);
            this.formEditClientes.get('estado_civil').setValidators([Validators.required]);
            this.formEditClientes.get('nivel_estudio').setValidators([Validators.required]);

        }

        if (tipo_persona.id == 2) {

            this.visibleServicioEditar = false;

            this.formEditClientes.get('apellidos').clearValidators();
            this.formEditClientes.get('fecha_nacimiento').clearValidators();
            this.formEditClientes.get('genero').clearValidators();
            this.formEditClientes.get('estado_civil').clearValidators();
            this.formEditClientes.get('nivel_estudio').clearValidators();

            this.formEditClientes.get('apellidos').updateValueAndValidity();
            this.formEditClientes.get('fecha_nacimiento').updateValueAndValidity();
            this.formEditClientes.get('genero').updateValueAndValidity();
            this.formEditClientes.get('estado_civil').updateValueAndValidity();
            this.formEditClientes.get('nivel_estudio').updateValueAndValidity();

            this.formEditClientes.get('tipo_documento').setValue(this.tipoDocumento[4]);
            this.formEditClientes.get('tipo_documento').disable()
        }
    }

    //Buscar localización
    getCountries() {
        this.clientesService.getCountries().subscribe(response => {
            this.countries$ = response;
        });
    }

    getStates() {
        this.clientesService.getStates(this.selectedCountry).subscribe(response => {
            this.states$ = response;
        });
    }

    getCities() {
        this.clientesService.getCities(this.selectedState).subscribe(response => {
            this.cities$ = response;
        });
    }

    //BUSCADOR

    searchInput() {
        let search = this.formSearch.get('search').value;
        if (search == "") {
            this.getIndex(search);
        }
    }

    search() {
        let search = this.formSearch.get('search').value;
        this.getIndex(search);
    }

    onPage(event) {
        this.pageCount = event['rows'];
        this.getIndex('', this.pageCount);
    }

    //Paginador

    onPageChange(event) {
        this.first = event.first;
        this.rows = event.rows;
    }


    leftTable() {
        this.pageActual = this.pageActual - 1;
        this.getIndex('', this.pageCount, this.pageActual);
        this.validatePage();
    }

    rightTable() {
        this.pageActual = this.pageActual + 1;
        this.getIndex('', this.pageCount, this.pageActual);
        this.validatePage();
    }

    validatePage() {
        if (this.pageActual == 1) {
            this.disablePageLeft = false;
        }

        if (this.pageActual > 1) {
            this.disablePageLeft = true;
        }

        if (this.ultimaPage == this.pageActual) {
            this.disablePageRight = false;
        }

        if (this.ultimaPage > this.pageActual) {
            this.disablePageRight = true;
        }
    }

    buscarPorTecla($event){
        //console.log($event)
        if($event.code == 'Enter'){  
            this.search();
        }
    }

}
