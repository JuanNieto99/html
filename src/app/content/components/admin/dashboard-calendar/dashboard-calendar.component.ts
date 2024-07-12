import { Component, signal, ChangeDetectorRef } from '@angular/core';
import {
    CalendarOptions,
    DateSelectArg,
    EventClickArg,
    EventApi,
    EventInput,
} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es'; // Importa el idioma español
import { DashboardCalendarService } from 'src/app/content/service/dashboard-calendar/dashboard-calendar.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { B } from '@fullcalendar/core/internal-common';
import { LocaleSettings } from 'primeng/calendar/public_api';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardRoomsService } from 'src/app/content/service/dashboardRooms/dashboard-rooms.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/content/service/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

interface dataEvento {
    nombre: string;
    id: number;
    fechaInnicio: string;
    fechaFin: string;
    todoElDia: boolean;
}

@Component({
    selector: 'app-dashboard-calendar',
    templateUrl: './dashboard-calendar.component.html',
    styleUrls: ['./dashboard-calendar.component.scss'],
})
export class DashboardCalendarComponent {
    public dayNamesSpanish = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    public dayNamesShortSpanish = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    public monthNamesSpanish = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    public monthNamesShortSpanish = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    public hotelId: number;
    public habitacionesReservadas: any[] = [];
    public hoy: Date;
    public reservaForm: FormGroup; //Formulario de reservacion
    public reservacionModalVisible: boolean = false;
    public primeraVez: boolean = true;
    private tipo_habitacion: number = 0;
    public habitacionData: any[] = [];
    public clienteData: any[] = [];
    public tarifaData: any[] = [];
    public formAbonosArray: FormArray; //Abonos
    public selectMedioPago: any[] = [];
    public abonosTotal: number = 0;
    public collapsed: boolean = true;
    public totalPagarReserva: number = 0; //Totales de la reserva
    public tarifasTotal: number = 0;
    public creandoCliente: boolean = false; //Crear cliente

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

    option: any = {
        plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth',
        },
        initialView: 'dayGridMonth',
        // initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        weekends: true,
        editable: false,
        selectable: true,
        selectMirror: false,
        dayMaxEvents: true,
        select: this.handleDateSelect.bind(this),
        eventClick: this.handleEventClick.bind(this),
        eventsSet: this.handleEvents.bind(this),
        locale: esLocale,
    };
    idGenerato: number = 50;
    calendarVisible = signal(true);
    calendarOptions = signal<CalendarOptions>(this.option);
    currentEvents = signal<EventApi[]>([]);

    constructor(
        private changeDetector: ChangeDetectorRef,
        private dashboardCalendarService: DashboardCalendarService,
        private FB: FormBuilder,
        private spinner: NgxSpinnerService,
        private dashboardRoomsService: DashboardRoomsService,
        private datePipe: DatePipe,
        private router: Router,
        private layoutService: LayoutService
    ) {}

    ngOnInit() {
        this.spinner.hide();
        let currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
        this.hotelId = currentUser.usuario.datalle_hoteles[0].hotel_id;
        this.reservaForm = this.FB.group({
            habitacion_id: ['', [Validators.required]],
            cliente_id: ['', [Validators.required]],
            tarifa_id: ['', [Validators.required]],
            producto_id: ['', []],
            abonos: this.formAbonosArray,
            descripcion: ['', []],
            fechaInicio: ['', [Validators.required]],
            fechaFinal: ['', [Validators.required]],
        });
        this.formAbonosArray = this.FB.array([]);
        this.getCalendariHabitacionesReservadas();
        this.hoy = new Date();
        this.getReserva();

    }

    handleCalendarToggle() {
        this.calendarVisible.update((bool) => !bool);
    }

    handleWeekendsToggle() {
        this.calendarOptions.mutate((options) => {
            options.weekends = !options.weekends;
        });
    }

    handleEventClick(clickInfo: EventClickArg) {
        let detalleHabitacionid = clickInfo.event._def.publicId;
        this.router.navigate([
            'dashboard/calendar/' + detalleHabitacionid + '/detailRoom',
        ]);
    }

    handleEvents(events: EventApi[]) {
        this.currentEvents.set(events);
        this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
    }

    eventoData() {
        let dataEvento: EventInput[] = [
            {
                id: '1',
                title: 'Hbitacion 2',
                start: new Date('2024-01-27T10:00:00'),
                end: new Date('2024-01-28T10:00:00'),
            },
            {
                id: '2',
                title: 'Hbitacion 3',
                start: new Date('2024-01-29T10:00:00'),
                end: new Date('2024-01-30T10:00:00'),
            },
        ];

        this.option.events = dataEvento;
    }

    createEventId() {
        this.idGenerato++;
    }

    getCalendariHabitacionesReservadas() {
        let data = {
            hotel_id: this.hotelId,
        };
        this.dashboardCalendarService
            .getHabitacionesCalendario(data)
            .subscribe((response: any) => {
                let dataEvento: EventInput[] = [];
                this.habitacionesReservadas = response.habitaciones;
                response.habitaciones.forEach((element) => {
                    let evento = {
                        id: element.id,
                        title:
                            element.habitacion.nombre +
                            ' ' +
                            element.cliente.nombres +
                            ' ' +
                            element.cliente.apellidos,
                        start: new Date(element.fecha_inicio),
                        end: new Date(element.fecha_salida),
                    };
                    let pasar = true;
                    dataEvento.forEach((element) => {
                        if (element.id == evento.id) {
                            pasar = false;
                        }
                    });
                    if (pasar) {
                        dataEvento.push(evento);
                    }
                });
                this.option.events = dataEvento;
            });
    }

    //abre el modal de reservacion
    handleDateSelect(selectedDay: DateSelectArg) {
        const fechaInicio = new Date(selectedDay.startStr).setDate(
            new Date(selectedDay.startStr).getDate() + 1
        );
        const fechaFinal = new Date(selectedDay.endStr).setDate(
            new Date(selectedDay.endStr).getDate()
        );
        if (new Date(fechaInicio).getTime() < new Date().getTime() - 86400000) {
            Swal.fire({
                title: 'Advertencia',
                text: 'No se puede reservar en fechas anteriores a la actual.',
                icon: 'warning',
            });
            return;
        }

        this.primeraVez = true;
        this.abonosTotal = 0;
        this.tarifasTotal = 0;
        this.totalPagarReserva = 0;
        this.tarifasPorHabitacion = [];
        this.reservaForm.reset();
        this.formAbonosArray.clear();
        this.collapsed = true;

        this.reservaForm.get('fechaInicio').setValue(new Date(fechaInicio));
        if (fechaInicio == fechaFinal) {
            this.reservaForm
            .get('fechaFinal')
            .setValue(new Date(fechaFinal + 86400000)); //agrega un dia mas
        } else{
            this.reservaForm.get('fechaFinal').setValue(new Date(fechaFinal));
        }

        this.reservacionModalVisible = true;
    }

    //trae las habitaciones, tarifas y clientes segun sea necesario
    getReserva(clienteBusqueda: string = '') {
        this.spinner.show();

        let data = {
            hotel_id: this.hotelId,
            cliente_busqueda: clienteBusqueda,
            tipo_habitacion: this.tipo_habitacion,
        };

        this.dashboardRoomsService.getReserva(data).subscribe(
            (response: any) => {
                this.spinner.hide();

                let dataCliente = response.cliente;
                let dataMedioPago = response.metodos_pago;
                let dataTarifa = response.tarifa;
                let dataHabitacion = response.habitacion;

                this.habitacionData = [];
                this.clienteData = [];
                this.selectMedioPago = [];
                this.tarifaData = [];

                dataHabitacion.forEach((element) => {
                    this.habitacionData.push({
                        name: element.nombre,
                        tipo: element.tipo,
                        id: element.id,
                    });
                });
                dataCliente.forEach((element) => {
                    const apellido = element.apellidos ? element.apellidos : '';
                    this.clienteData.push({
                        nombre: element.numero_documento + ' ' + element.nombres + ' ' + apellido,
                        code: element.numero_documento,
                        id: element.id,
                    });
                })
                dataTarifa.forEach((element) => {
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
                });
                dataMedioPago.forEach((element) => {
                    this.selectMedioPago.push({
                        nombre: element.nombre,
                        id: element.id,
                    });
                });


                this.primeraVez = false;

            },
            (error) => {
                this.spinner.hide();
                console.log('Error: ', error);
            }
        );
    }
    public tarifasPorHabitacion: any[] = [];

    selectHabitacion(event) {
        if (event.value.length > 0) {
            this.tipo_habitacion = event.value[0].tipo;
            let tarifas = []
            //busca las tarifas segun el Tipo de habitación
            this.tarifaData.forEach((element) => {
                if (element.tipo_habitacion_id == this.tipo_habitacion) {
                    tarifas.push(element);
                }
            });
            this.tarifasPorHabitacion = tarifas;
        } else {
            this.reservaForm.get('tarifa_id').setValue([]);
            this.tarifasPorHabitacion = [];
        }
    }

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
            this.abonosTotal = this.abonosTotal + element.monto;
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

    //enviar reservacion
    enviarReservar() {
        this.spinner.show();

        let data = {
            hotel_id: this.hotelId,
            habitacion_id: this.reservaForm.get('habitacion_id').value[0].id,
            cliente_id: this.reservaForm.get('cliente_id').value[0].id,
            tarifas: this.reservaForm.get('tarifa_id').value,
            abonos: this.formAbonosArray.value,
            descripcion: this.reservaForm.get('descripcion').value,
            fecha_final: this.datePipe.transform(
                this.reservaForm.get('fechaFinal').value,
                'yyyy-MM-dd HH:mm:ss'
            ),
            fecha_inicio: this.datePipe.transform(
                this.reservaForm.get('fechaInicio').value,
                'yyyy-MM-dd HH:mm:ss'
            ),
            subtotal: this.totalPagarReserva - this.abonosTotal,
            total: this.totalPagarReserva,
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
                    this.getCalendariHabitacionesReservadas();
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

    //Crear cliente
    crearCliente(tipo: 'reserva') {
        //ir a crear un nuevo cliente
        this.creandoCliente = true;
    }

    handleClienteCreado(event: boolean) {
        //recibe el evento de si se ha creado o no el cliente
        this.creandoCliente = false;
        if (event) {
            this.getReserva();
        }
        if (this.formAbonosArray.length > 0) {
            this.collapsed = false;
        } else this.collapsed = true;
    }

    hideDialog(){
        this.reservacionModalVisible = false;
    }
}
