import { Component, OnInit, ViewChild } from '@angular/core';
import { dashboardRooms } from 'src/app/content/models/dashboard/dashboard-rooms.model';
import { DashboardRoomsService } from 'src/app/content/service/dashboardRooms/dashboard-rooms.service';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { ThirdPartyDraggable } from '@fullcalendar/interaction';
import { Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MultiSelect } from 'primeng/multiselect';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { InputTextarea } from 'primeng/inputtextarea';
import { LocaleSettings } from 'primeng/calendar';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
interface HotelData {
    hotel_id: number; // Adjust the type accordingly
    piso_id: number;
    estado_id: number;
}

interface dataRoomPiso {
    piso: number;
    habitaciones: dataRoom[];
    loading: boolean;
}

interface dataRoom {
    nombre: string;
    json: string;
    id: number;
    detalle: any;
    tipoHabitacion: any;
    habitacionNombre: any;
    piso: number;
    habitacionEstado: any;
}

interface dataProducto {
    nombre: string;
    id: number;
}

interface dataMedioPago {
    nombre: string;
    id: number;
}
@Component({
    selector: 'app-dashboard-rooms',
    templateUrl: './dashboard-rooms.component.html',
    styleUrls: ['./dashboard-rooms.component.scss'],
})
export class DashboardRoomsComponent implements OnInit {
    @ViewChild('op1') op1: OverlayPanel;

    public dayNamesSpanish = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    public dayNamesShortSpanish = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    public monthNamesSpanish = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    public monthNamesShortSpanish = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    public localeSettingsSpanish: LocaleSettings = {
        firstDayOfWeek: 1, // Lunes es el primer día de la semana
        dayNames: this.dayNamesSpanish,
        dayNamesShort: this.dayNamesShortSpanish,
        monthNames: this.monthNamesSpanish,
        monthNamesShort: this.monthNamesShortSpanish,
        today: 'Hoy',
        clear: 'Borrar',
        dateFormat: 'dd/mm/yy',
        weekHeader: 'Sm',
    };

    public menuHabitacion: MenuItem[];
    public fechaInicioLimpieza: any;
    public fechaFinalLimpieza: any;
    public fechaInicioMantenimiento: any;
    public fechaFinalMantenimiento: any;
    public selectedMulti: any[] = [];
    public nombreHabitacionReservada: string;
    private hotelId: number;
    private pisoId: number;
    private primerPiso: number = 1;
    private pisoSeleccionado: number = 1;
    public dataRoomsPisos: any[];
    public htmlContent: string;
    public dataRoom: dataRoomPiso[] = [];
    private estadoHabitacion: number;
    private habitacionId: number;
    public formLimpieza: FormGroup;
    public formMantenimiento: FormGroup;

    public detalleHabitacion: any;
    public ProductoServicioData: any;
    public ProductoServicioDataSeleccionados: dataProducto[] = [];
    public empleadosData: any;
    public visibleModalLimpieza: boolean = false;
    public visibleModalMantenimiento: boolean = false;
    private tipoHabitacionId: number;

    public selectMedioPago: dataMedioPago[] = [];

    //Reservar y ocupar
    public reservacionModalVisible: boolean = false;
    public ocuparModalVisible: boolean = false;
    public clienteData: any;
    public tarifaData: any = [];
    public metodosPago: any;

    public formAbonosArray: FormArray;
    public formAbonoOcuparArray: FormArray;

    public reservaForm: FormGroup;
    public tarifasTotal = 0;
    public abonosTotal = 0;
    public totalPagarReserva: number = 0;

    public ocuparForm: FormGroup;
    public tarifasTotalOcupar = 0;
    public abonosTotalOcupar = 0;
    public totalPagarOcupar = 0;

    public hoy: Date;
    public disableButtonMantenimiento: boolean = false;
    public disableButtonLimpieza: boolean = false;
    public estadoHabitacionActual: any;

    public creandoCliente: boolean = false;
    public collapsed: boolean = true;

    selectedFilter: number | null = null;

    ngOnInit(): void {
        this.creandoCliente = false;
        this.buildForm();

        this.pisoId = 1;
        this.primerPiso = this.pisoId;
        let currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
        this.hotelId = currentUser.usuario.datalle_hoteles[0].hotel_id;
        this.getRoomsDashboardPisos();
        this.clienteData = [];
        this.ProductoServicioData = [];
        this.empleadosData = [];
        this.tarifaData = [];
        this.hoy = new Date();
    }

    constructor(
        private dashboardRoomsService: DashboardRoomsService,
        private FB: FormBuilder,
        private spinner: NgxSpinnerService,
        private datePipe: DatePipe,
        private router: Router,
        private layoutService: LayoutService
    ) {}

    buildForm() {
        this.spinner.hide();

        this.formLimpieza = this.FB.group({
            descripcion: ['', []],
            empleado: ['', [Validators.required]],
            fechaInicio: ['', [Validators.required]],
            fechaFinal: ['', [Validators.required]],
        });

        this.formMantenimiento = this.FB.group({
            descripcion: ['', []],
            empleado: ['', [Validators.required]],
            fechaInicio: ['', [Validators.required]],
            fechaFinal: ['', [Validators.required]],
        });

        this.reservaForm = this.FB.group({
            cliente_id: ['', [Validators.required]],
            tarifa_id: ['', [Validators.required]],
            producto_id: ['', []],
            abonos: this.formAbonosArray,
            descripcion: ['', []],
            fechaInicio: ['', [Validators.required]],
            fechaFinal: ['', [Validators.required]],
        });

        this.ocuparForm = this.FB.group({
            cliente_id: ['', [Validators.required]],
            tarifa_id: ['', [Validators.required]],
            producto_id: ['', []],
            abonos: this.formAbonoOcuparArray,
            descripcion: ['', []],
        });

        this.formAbonosArray = this.FB.array([]);
        this.formAbonoOcuparArray = this.FB.array([]);
    }

    getRoomsDashboard(ordenaBY = 0) {
        let data: HotelData = {
            hotel_id: this.hotelId,
            piso_id: this.pisoId,
            estado_id: ordenaBY,
        };

        this.dashboardRoomsService.getDashboardRooms(data).subscribe(
            (response: any) => {
                this.dataRoom.forEach((element) => {
                    if (this.pisoId == element.piso) {
                        element.habitaciones = [];
                    }
                });

                let pisoEncontrado = this.dataRoom.find(
                    (piso) => piso.piso == this.pisoId
                );
                pisoEncontrado.loading = false;
                response.forEach((habitaciones) => {
                    pisoEncontrado.habitaciones.push({
                        nombre: habitaciones.nombre,
                        json: habitaciones.diseno_json,
                        id: habitaciones.id,
                        detalle: habitaciones.habitacion_estado,
                        tipoHabitacion: habitaciones.tipo_habitacion,
                        habitacionNombre: JSON.parse(
                            habitaciones.tipo_habitacion.diseno_json
                        )['puerta'],
                        piso: habitaciones.piso,
                        habitacionEstado: habitaciones.habitacion_estado,
                    });
                });

                this.dataRoom.forEach((element) => {
                    if (this.pisoId == element.piso) {
                        element = pisoEncontrado;
                    }
                });
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    getRoomsDashboardPisos(ordenaBY = 0) {
        let data: HotelData = {
            hotel_id: this.hotelId,
            piso_id: this.pisoId,
            estado_id: ordenaBY,
        };

        this.dashboardRoomsService.getPisos(data).subscribe(
            (response: any) => {
                this.dataRoomsPisos = [];

                this.dataRoomsPisos = response.pisos;
                this.dataRoomsPisos.forEach((element) => {
                    this.dataRoom.push({
                        piso: element.piso,
                        habitaciones: [],
                        loading: true,
                    });
                });

                this.getRoomsDashboard(ordenaBY);
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    openTag(piso) {
        this.pisoId = piso;
        this.getRoomsDashboard();
    }

    opcionSeleccionada($event, habitacion) {
        this.estadoHabitacion = $event.item.id;
        this.formAbonosArray = this.FB.array([]);
        this.formAbonoOcuparArray = this.FB.array([]);

        setTimeout(() => {
            this.accionMenuHabitaciones();
        }, 500);
    }

    accionMenuHabitaciones() {
        let parametros = {};

        if (this.estadoHabitacion == 5) {
            //Reservar
            const fechaFinal = new Date().setDate(new Date().getDate() + 1);
            this.reservaForm.reset();
            this.formAbonosArray.clear();
            this.abonosTotal = 0;
            this.tarifasTotal = 0;
            this.totalPagarReserva = 0;
            this.collapsed = true;
            this.getReserva();
            this.reservaForm.get('fechaInicio').setValue(new Date());
            this.reservaForm.get('fechaFinal').setValue(new Date(fechaFinal));
            this.reservacionModalVisible = true;
        } else if (this.estadoHabitacion == 2) {
            //Ocupar
            this.ocuparForm.reset();
            this.formAbonoOcuparArray.clear();
            this.abonosTotalOcupar = 0;
            this.tarifasTotalOcupar = 0;
            this.totalPagarOcupar = 0;
            this.collapsed = true;
            this.getReserva();
            this.ocuparModalVisible = true;
        } else if (this.estadoHabitacion == 4) {
            let data = {
                hotel_id: this.habitacionId,
                estado: 4,
            };

            this.getDataEmpleado(data);
        } else if (this.estadoHabitacion == 6) {
            //Mantenimiento
            let data = {
                hotel_id: this.habitacionId,
                estado: 6,
            };
            this.getDataEmpleado(data);

            //this.enviarMantenimiento(parametros);
        } else if (this.estadoHabitacion == 20) {
            //Limpieza
            parametros = {
                id_habitacion: this.habitacionId,
            };

            Swal.fire({
                title: '¿Estas seguro que deseas Salir (Check Out)?',
                text: '',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, Confirmar',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.enviarDesocupar(parametros);
                }
            });
        } else if (this.estadoHabitacion == 50) {
            parametros = {
                id_habitacion: this.habitacionId,
            };

            Swal.fire({
                title: '¿Estas seguro que deseas Anular la reserva?',
                text: '',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, Confirmar',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.enviarAnularReserva(parametros);
                }
            });
        } else if (this.estadoHabitacion == 40) {
            //Limpieza
            parametros = {
                id_habitacion: this.habitacionId,
            };

            Swal.fire({
                title: '¿Estas seguro que deseas Anular La Limpieza?',
                text: '',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, Confirmar',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.enviarAnularLimpieza(parametros);
                }
            });
        } else if (this.estadoHabitacion == 60) {
            parametros = {
                id_habitacion: this.habitacionId,
            };

            Swal.fire({
                title: '¿Estas seguro que deseas Anular el mantenimiento?',
                text: '',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, Confirmar',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.enviarAnularMantenimiento(parametros);
                }
            });
        } else if (this.estadoHabitacion == 8) {
            this.router.navigate([
                'dashboard/dashboardRooms/' + this.habitacionId + '/ocupar',
            ]);
        }
    }

    abrirMenu($event, habitacion) {
        this.op1.toggle($event);
        let estadoHabitaciones = [];
        this.habitacionId = habitacion.id;
        this.nombreHabitacionReservada = habitacion.nombre;
        this.tipoHabitacionId = habitacion.tipoHabitacion.id;
        this.pisoSeleccionado = habitacion.piso;
        this.estadoHabitacionActual = habitacion.habitacionEstado;
        this.detalleHabitacion = habitacion.detalle;
        this.estadoHabitacionActual.forEach((element) => {
            estadoHabitaciones.push(element.estado_id);
        });

        let letItem: MenuItem[] = []; // Corrected the declaration and initialization

        if (!estadoHabitaciones.includes(5)) {
            //no esta reservada entonces reservemosla
            letItem.push({
                label: 'Reservar',
                icon: 'pi pi-calendar-times',
                id: '5',
                command: (event: MenuItemCommandEvent) =>
                    this.opcionSeleccionada(event, habitacion),
                visible: true,
                disabled: false, //estadoHabitaciones.includes(7)? true :!estadoHabitaciones.includes(2)?false:true,
            });
        }

        if (!estadoHabitaciones.includes(4)) {
            //no esta en limpieza
            letItem.push({
                label: 'Limpieza',
                icon: 'pi pi-exclamation-triangle',
                id: '4',
                command: (event: MenuItemCommandEvent) =>
                    this.opcionSeleccionada(event, habitacion),
                visible: true,
                disabled: !estadoHabitaciones.includes(2) ? false : true,
            });
        }

        if (estadoHabitaciones.includes(2) || estadoHabitaciones.includes(7)) {
            //ver ocupacion
            letItem.push({
                label: 'Ver Ingreso',
                icon: 'pi pi-book',
                id: '8',
                command: (event: MenuItemCommandEvent) =>
                    this.opcionSeleccionada(event, habitacion),
                visible: true,
                disabled: estadoHabitaciones.includes(7)
                    ? false
                    : !estadoHabitaciones.includes(2)
                    ? true
                    : false,
            });
        }

        if (!estadoHabitaciones.includes(2)) {
            //no ocupado
            let habilitar_desocupado_por_reservado = false;

            if (habitacion.detalle) {
                habitacion.detalle.forEach((element) => {
                    if (element.estado_id == 5) {
                        let fecha_inicio = new Date(element.fecha_inicio);
                        let fecha_actual =
                            fecha_inicio.getFullYear() +
                            '/' +
                            fecha_inicio.getMonth() +
                            '/' +
                            fecha_inicio.getDate();

                        let hoy =
                            new Date().getFullYear() +
                            '/' +
                            new Date().getMonth() +
                            '/' +
                            new Date().getDate();

                        if (hoy == fecha_actual) {
                            habilitar_desocupado_por_reservado = true;
                        }
                    }
                });
            }

            letItem.push({
                label: 'Ingresar (Check-in)',
                icon: 'pi pi-lock',
                id: '2',
                command: (event: MenuItemCommandEvent) =>
                    this.opcionSeleccionada(event, habitacion),
                visible: true,
                disabled: estadoHabitaciones.includes(7) ? true : false || estadoHabitaciones.includes(4) || estadoHabitaciones.includes(6), //habilitar_desocupado_por_reservado?false:!estadoHabitaciones.includes(5)/* 5-6-4 */ ?false:true,
            });
        }

        if (!estadoHabitaciones.includes(6)) {
            //no esta en mantenimiento

            letItem.push({
                label: 'Mantenimiento',
                icon: 'pi pi-wrench',
                id: '6',
                command: (event: MenuItemCommandEvent) =>
                    this.opcionSeleccionada(event, habitacion),
                visible: true,
                disabled: !estadoHabitaciones.includes(2) ? false : true,
            });
        }

        let yaEstaReservada = false;
        estadoHabitaciones.forEach((element) => {
            switch (element) {
                case 5:
                    //esta reservada
                    /*  letItem.push(
                        {
                          label: 'Anular Reserva',
                          icon: 'pi pi-calendar-times',
                          id: '50',
                          command: (event: MenuItemCommandEvent) => this.opcionSeleccionada(event, habitacion),
                          visible: true,
                          disabled: !estadoHabitaciones.includes(2)?false:true,
                        }
                      )*/
                    if (!yaEstaReservada) {
                        letItem.push({
                            label: 'Reservar',
                            icon: 'pi pi-calendar-times',
                            id: '5',
                            command: (event: MenuItemCommandEvent) =>
                                this.opcionSeleccionada(event, habitacion),
                            visible: true,
                            disabled: false, //!estadoHabitaciones.includes(2)?false:true,
                        });

                        yaEstaReservada = true;
                    }

                    break;
                case 4:
                    //esta limpieza

                    letItem.push({
                        label: 'Anular Limpieza',
                        icon: 'pi pi-exclamation-triangle',
                        id: '40',
                        command: (event: MenuItemCommandEvent) =>
                            this.opcionSeleccionada(event, habitacion),
                        visible: true,
                        disabled: !estadoHabitaciones.includes(2)
                            ? false
                            : true,
                    });

                    break;
                case 6:
                    //esta mantenimiento

                    letItem.push({
                        label: 'Anular Mantenimiento',
                        icon: 'pi pi-wrench',
                        id: '60',
                        command: (event: MenuItemCommandEvent) =>
                            this.opcionSeleccionada(event, habitacion),
                        visible: true,
                        disabled: !estadoHabitaciones.includes(2)
                            ? false
                            : true,
                    });

                    break;

                case 2:
                    //esta ocupado

                    letItem.push({
                        label: 'Salir (Check Out)',
                        icon: 'pi pi-lock-open',
                        id: '20',
                        command: (event: MenuItemCommandEvent) =>
                            this.opcionSeleccionada(event, habitacion),
                        visible: true,
                    });

                    break;
            }
        });

        this.menuHabitacion = [
            {
                label: 'Opciones',
                items: letItem,
            },
        ];
    }

    enviarDesocupar(parametros) {
        this.dashboardRoomsService.desocupar(parametros).subscribe(
            (response: any) => {
                let data = response;

                if (data.code == 'success') {
                    Swal.fire({
                        title: 'Exito',
                        text: 'Anulacion Exitosa.',
                        icon: 'success',
                    });

                    this.openTag(this.pisoSeleccionado);
                } else if (data.code == 'warning') {
                    Swal.fire({
                        title: 'Advertencia',
                        text: data.error,
                        icon: 'warning',
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error al anular.',
                        icon: 'error',
                    });
                }
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    enviarAnularReserva(parametros) {
        this.dashboardRoomsService.anularReserva(parametros).subscribe(
            (response: any) => {
                let data = response;

                if (data.code == 'success') {
                    Swal.fire({
                        title: 'Exito',
                        text: 'Anulacion Exitosa.',
                        icon: 'success',
                    });
                    this.layoutService.reloadComponent();
                    this.openTag(this.pisoSeleccionado);
                } else if (data.code == 'warning') {
                    Swal.fire({
                        title: 'Advertencia',
                        text: data.error,
                        icon: 'warning',
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error al anular.',
                        icon: 'error',
                    });
                }
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    enviarAnularLimpieza(parametros) {
        this.dashboardRoomsService.anularLimpieza(parametros).subscribe(
            (response: any) => {
                let data = response;
                if (data.code == 'success') {
                    Swal.fire({
                        title: 'Exito',
                        text: 'Anulacion Exitosa.',
                        icon: 'success',
                    });
                    this.openTag(this.pisoSeleccionado);
                } else if (data.code == 'warning') {
                    Swal.fire({
                        title: 'Advertencia',
                        text: data.error,
                        icon: 'warning',
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error al anular.',
                        icon: 'error',
                    });
                }
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    enviarAnularMantenimiento(parametros) {
        this.spinner.show();
        this.dashboardRoomsService.anularMantenimiento(parametros).subscribe(
            (response: any) => {
                this.spinner.hide();
                let data = response;
                if (data.code == 'success') {
                    Swal.fire({
                        title: 'Exito',
                        text: 'Anulacion Exitosa.',
                        icon: 'success',
                    });
                    this.openTag(this.pisoSeleccionado);
                } else if (data.code == 'warning') {
                    Swal.fire({
                        title: 'Advertencia',
                        text: data.error,
                        icon: 'warning',
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error al anular.',
                        icon: 'error',
                    });
                }
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    enviarMantenimiento(parametros) {
        this.spinner.show();
        this.dashboardRoomsService.mantenimiento(parametros).subscribe(
            (response: any) => {
                this.spinner.hide();
                this.visibleModalMantenimiento = false;
                let data = response;
                if (data.code == 'success') {
                    Swal.fire({
                        title: 'Exito',
                        text: 'Registro exitoso.',
                        icon: 'success',
                    });
                    this.openTag(this.pisoSeleccionado);
                } else if (data.code == 'warning') {
                    Swal.fire({
                        title: 'Advertencia',
                        text: data.error,
                        icon: 'warning',
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error al registrar.',
                        icon: 'error',
                    });
                }
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    enviarOcuparReserva(parametros) {
        this.spinner.show();
        this.dashboardRoomsService.ocuparReserva(parametros).subscribe(
            (response: any) => {
                this.spinner.hide();
                let data = response;
                this.ocuparModalVisible = false;
                if (data.code == 'success') {
                    Swal.fire({
                        title: 'Exito',
                        text: 'Ingreso exitoso.',
                        icon: 'success',
                    });
                    this.openTag(this.pisoSeleccionado);
                } else if (data.code == 'warning') {
                    Swal.fire({
                        title: 'Advertencia',
                        text: data.error,
                        icon: 'warning',
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error al generar el ingreso.',
                        icon: 'error',
                    });
                }
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    enviarLimpieza(parametros) {
        this.spinner.show();
        this.dashboardRoomsService.limpieza(parametros).subscribe(
            (response: any) => {
                this.spinner.hide();
                let data = response;
                this.visibleModalLimpieza = false;
                if (data.code == 'success') {
                    Swal.fire({
                        title: 'Exito',
                        text: 'Registro exitoso.',
                        icon: 'success',
                    });
                    this.openTag(this.pisoSeleccionado);
                } else if (data.code == 'warning') {
                    Swal.fire({
                        title: 'Advertencia',
                        text: data.error,
                        icon: 'warning',
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error al registrar.',
                        icon: 'error',
                    });
                }
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    getDataEmpleado(parametros: any) {
        this.spinner.show();
        this.dashboardRoomsService.getEmpleadoHabitacion(parametros).subscribe(
            (response: any) => {
                this.spinner.hide();
                this.empleadosData = [];
                response.empleados.forEach((element) => {
                    this.empleadosData.push({
                        name: element.nombres + ' ' + element.apellidos,
                        code: element.id,
                    });
                });
                if (parametros.estado == 4) {
                    this.formLimpieza.reset();
                    this.visibleModalLimpieza = true;
                } else if (parametros.estado == 6) {
                    this.formMantenimiento.reset();
                    this.visibleModalMantenimiento = true;
                }
            },
            (error) => {
                this.spinner.hide();
                console.log('Error: ', error);
            }
        );
    }

    submitAsignarMantenimiento() {
        if (this.formMantenimiento.valid) {
            let data = {
                empleado_id: this.formMantenimiento.value.empleado[0].code,
                descripcion: this.formMantenimiento.value.descripcion,
                fecha_final: this.datePipe.transform(
                    this.formMantenimiento.value.fechaFinal,
                    'yyyy-MM-dd HH:mm:ss'
                ),
                fecha_inicio: this.datePipe.transform(
                    this.formMantenimiento.value.fechaInicio,
                    'yyyy-MM-dd HH:mm:ss'
                ),
                habitacion_id: this.habitacionId,
            };
            this.enviarMantenimiento(data);
        }
    }

    changeFechaMantenimiento() {
        let fechaInicio = this.formMantenimiento.get('fechaInicio').value;
        let fechaFinal = this.formMantenimiento.get('fechaFinal').value;

        if (fechaInicio > fechaFinal) {
            this.disableButtonMantenimiento = true;
        } else {
            this.disableButtonMantenimiento = false;
        }
    }

    changeFechaLimpieza($event) {
        let fechaInicio = this.formLimpieza.get('fechaInicio').value;
        let fechaFinal = this.formLimpieza.get('fechaFinal').value;

        if (fechaInicio > fechaFinal) {
            this.disableButtonLimpieza = true;
        } else {
            this.disableButtonLimpieza = false;
        }
    }

    validarEstado(estados, id): number {
        let respuesta = estados.filter(
            (element) => element.estado_id == id
        ).length;

        return respuesta;
    }

    orderar(ordenaBY) {
        this.selectedFilter = ordenaBY;
        this.dataRoom = [];
        this.getRoomsDashboardPisos(ordenaBY);
    }

    busquedaCliente($event) {
        let clienteBusqueda = $event.filter;
        this.getReserva(clienteBusqueda);
    }

    submitAsignarLimpieza() {
        if (this.formLimpieza.valid) {
            let data = {
                empleado_id: this.formLimpieza.value.empleado[0].code,
                descripcion: this.formLimpieza.value.descripcion,
                fecha_final: this.datePipe.transform(
                    this.formLimpieza.value.fechaFinal,
                    'yyyy-MM-dd HH:mm:ss'
                ),
                fecha_inicio: this.datePipe.transform(
                    this.formLimpieza.value.fechaInicio,
                    'yyyy-MM-dd HH:mm:ss'
                ),
                habitacion_id: this.habitacionId,
            };

            this.enviarLimpieza(data);
        }
    }

    opcionesHabitacion(habitacion) {}

    // //------------------------------------RESERVAR E INGRESAR----------------------------------------------
    getReserva(clienteBusqueda: string = '') {
        this.spinner.show();
        let data = {
            hotel_id: this.hotelId,
            cliente_busqueda: clienteBusqueda,
            tipo_habitacion: this.tipoHabitacionId,
        };

        this.dashboardRoomsService.getReserva(data).subscribe(
            (response: any) => {
                this.spinner.hide();

                let dataCliente = response.cliente;
                let dataMedioPago = response.metodos_pago;
                let dataTarifa = response.tarifa;

                this.clienteData = [];
                this.selectMedioPago = [];
                this.tarifaData = [];

                dataCliente.forEach((element) => {
                    const apellido = element.apellidos ? element.apellidos : '';

                    this.clienteData.push({
                        nombre: element.numero_documento + ' ' + element.nombres + ' ' + apellido,
                        code: element.numero_documento,
                        id: element.id,
                    });
                });

                dataMedioPago.forEach((element) => {
                    this.selectMedioPago.push({
                        nombre: element.nombre,
                        id: element.id,
                    });
                });

                dataTarifa.forEach((element) => {
                    if (element.tipo_habitacion_id == this.tipoHabitacionId) {
                        this.tarifaData.push({
                            nombre: element.nombre,
                            id: element.id,
                            tipo: element.tipo,
                            valor: element.valor,
                            tipo_habitacion_id: element.tipo_habitacion_id,
                            icon:
                                element.tipo != 1
                                    ? 'pi pi-hourglass'
                                    : 'pi pi-moon',
                        });
                    }
                });
            },
            (error) => {
                this.spinner.hide();
                console.log('Error: ', error);
            }
        );
    }

    // //------------------------------------RESERVAR----------------------------------------------
    checkTarifaReserva(event) {
        this.tarifasTotal = 0;
        this.reservaForm.get('tarifa_id').value.forEach((element) => {
            this.tarifasTotal = this.tarifasTotal + parseInt(element.valor);
        });
        this.totalPagarReserva = 0;
        this.totalPagarReserva = this.tarifasTotal;
    }

    checkAbonos() {
        this.abonosTotal = 0;

        this.formAbonosArray.value.forEach((element) => {
            this.abonosTotal = this.abonosTotal + parseFloat(element.monto);
        });
    }

    agregarAbono() {
        let form = this.FB.group({
            monto: ['', [Validators.required, Validators.min(0)]],
            medio_pago: [
                this.selectMedioPago[0],
                [Validators.required, Validators.min(0)],
            ],
        });

        this.formAbonosArray.push(form);
    }

    eliminarAbono(index: number) {
        this.formAbonosArray.removeAt(index);
        this.checkAbonos();
    }

    enviarReservar() {
        this.spinner.show()
        let data = {
            hotel_id: this.hotelId,
            habitacion_id: this.habitacionId,
            cliente_id: this.reservaForm.get('cliente_id').value[0].id,
            tarifas: this.reservaForm.get('tarifa_id').value,
            abonos: this.formAbonosArray.value,
            descripcion: this.reservaForm.get('descripcion').value,
            fecha_inicio: this.datePipe.transform(
                this.reservaForm.get('fechaInicio').value,
                'yyyy-MM-dd HH:mm:ss'
            ),
            fecha_final: this.datePipe.transform(
                this.reservaForm.get('fechaFinal').value,
                'yyyy-MM-dd HH:mm:ss'
            ),
            subtotal: this.totalPagarReserva - this.abonosTotal,
            total: this.totalPagarReserva,

            productos: [],
        };

        this.dashboardRoomsService.reservar(data).subscribe(
            (response: any) => {
                this.spinner.hide();
                let data = response;
                this.reservacionModalVisible = false;
                if (data.code == 'success') {
                    this.layoutService.reloadComponent();
                    Swal.fire({
                        title: 'Exito',
                        text: 'Reservacion exitosa.',
                        icon: 'success',
                    });
                    this.openTag(this.pisoSeleccionado);
                } else if (data.code == 'warning') {
                    Swal.fire({
                        title: 'Advertencia',
                        text: data.error,
                        icon: 'warning',
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error al generar la reserva.',
                        icon: 'error',
                    });
                }
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    // //------------------------------------INGRESAR----------------------------------------------
    checkTarifaOcupar($event) {
        this.tarifasTotalOcupar = 0;
        this.ocuparForm.get('tarifa_id').value.forEach((element) => {
            this.tarifasTotalOcupar =
                this.tarifasTotalOcupar + parseInt(element.valor);
        });

        this.totalPagarOcupar = this.tarifasTotalOcupar;
    }

    checkAbonoOcupar() {
        this.abonosTotalOcupar = 0;

        this.formAbonoOcuparArray.value.forEach((element) => {
            this.abonosTotalOcupar =
                this.abonosTotalOcupar + parseFloat(element.monto);
        });
    }

    agregarAbonoOcupar() {
        let form = this.FB.group({
            monto: ['', [Validators.required, Validators.min(0)]],
            medio_pago: [
                this.selectMedioPago[0],
                [Validators.required, Validators.min(0)],
            ],
        });

        this.formAbonoOcuparArray.push(form);
    }

    eliminarAbonoOcupar(index: number) {
        this.formAbonoOcuparArray.removeAt(index);
        this.checkAbonoOcupar();
    }

    enviarOcupar() {
        this.spinner.show();
        let data = {
            cliente_id: this.ocuparForm.get('cliente_id').value[0].id,
            total: this.totalPagarOcupar,
            subtotal: this.totalPagarOcupar - this.abonosTotalOcupar,
            tarifas: this.ocuparForm.get('tarifa_id').value,
            productos: [],
            descripcion: this.ocuparForm.get('descripcion').value,
            habitacion_id: this.habitacionId,
            hotel_id: this.hotelId,
            abonos: this.formAbonoOcuparArray.value,
        };
        this.dashboardRoomsService.ocupar(data).subscribe(
            (response: any) => {
                this.spinner.hide();
                let data = response;
                this.ocuparModalVisible = false;
                if (data.code == 'success') {
                    Swal.fire({
                        title: 'Exito',
                        text: 'Ingreso exitosa.',
                        icon: 'success',
                    });
                    this.layoutService.reloadComponent();
                    this.openTag(this.pisoSeleccionado);
                } else if (data.code == 'warning') {
                    Swal.fire({
                        title: 'Advertencia',
                        text: data.error,
                        icon: 'warning',
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error al generar el ingreso.',
                        icon: 'error',
                    });
                }
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    //Ir a crear un nuevo cliente
    crearCliente() {
        this.creandoCliente = true;
    }

    //recibe el evento de que se ha creado un cliente desde el modal de crear cliente
    handleClienteCreado(event: boolean) {
        this.creandoCliente = false;

        if (event) {
            this.getReserva();
        }
        if (this.formAbonosArray.length > 0 ||
            this.formAbonoOcuparArray.length > 0
        ) {
            this.collapsed = false;
        } else this.collapsed = true;
    }


    hideDialog(){
        this.reservacionModalVisible = false;
    }
}
