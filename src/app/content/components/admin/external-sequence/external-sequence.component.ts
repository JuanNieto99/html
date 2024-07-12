import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ExternalSequenceService } from '../../../service/externalSequence/external-sequence.service';
import Swal from 'sweetalert2';
import { DatePipe, formatDate } from '@angular/common';
import { AuthService } from 'src/app/content/service/auth.service';

interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

@Component({
    selector: 'app-external-sequence',
    templateUrl: './external-sequence.component.html',
    styleUrls: ['./external-sequence.component.scss'],
})
export class ExternalSequenceComponent {
    public permisoCrear = AuthService.hasPermission(['administracion.secuenciaExterna.crear']);
    public permisoActualizar = AuthService.hasPermission(['administracion.secuenciaExterna.actualizar']);
    public permisoEliminar = AuthService.hasPermission(['administracion.secuenciaExterna.eliminar']);

    public loadingTable: boolean = false;
    public externalSequenceData: any[];
    public pageCount: number = 10;
    public visibleModalExternalSequence: boolean = true;
    public visibleModalExternalSequenceEditar: boolean = false;
    public formCreateExternalSequence: FormGroup;
    public formSearch: FormGroup;
    public formEditExternalSequence: FormGroup;
    public countRegisters: number;
    public imagen: any = null;
    public tipoOperacion: any = null;
    public hotel: any[];
    public idEditando: number = 0;
    public dataEditarInfoExternalSequence: any;
    public secuenciaInicial: number;
    public secuenciaActual: number;
    public secuenciaFinal: number;
    public fechaInicial: string;
    public fechaFinal: string;
    public prefijo: string;
    public pageActual: number = 1;
    public ultimaPage: number = 1;
    public disablePageLeft: boolean = false;
    public disablePageRight: boolean = false;
    public first: number = 0;
    public rows: number = 8;


    constructor(
        private FB: FormBuilder,
        private spinner: NgxSpinnerService,
        private ExternalSequenceService: ExternalSequenceService,
        private datePipe: DatePipe,
    ) { }

    esMayor(secuencia1: string, secuencia2: string) {
        return parseInt(secuencia1, 10) > parseInt(secuencia2, 10)
    }

    ngOnInit(): void {
        this.buildForm();
        this.getIndex();
        this.visibleModalExternalSequence = false;
    }

    openModal() {
        this.onCreate();
    }

    onCreate() {
        this.formCreateExternalSequence.reset();
        this.ExternalSequenceService.getExternalSequence(0).subscribe(
            (response: any) => {
                this.hotel = response.hotel;
                this.prefijo = response.prefijo;
                this.tipoOperacion = response.tipo_operacion;
                // Verificar si las fechas son válidas antes de formatearlas
                if (response.fecha_inicio && response.fecha_final) {
                    this.fechaInicial = new Date(response.fecha_inicio).toISOString().split('T')[0];
                    this.fechaFinal = new Date(response.fecha_final).toISOString().split('T')[0];
                } else {
                    //Es normal esto che
                }

                this.secuenciaInicial = response.secuencia_incial;
                this.secuenciaActual = response.secuencia_actual;
                this.secuenciaFinal = response.secuencia_final;

                this.visibleModalExternalSequence = true;
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }


    onRemove(event) {
        this.imagen = null;
    }

    onSelect(event) {
        this.imagen = event.currentFiles[0]; //.objectURL.changingThisBreaksApplicationSecurity;
    }

    onPage(event) {
        this.pageCount = event['rows'];
        this.getIndex('', this.pageCount);
    }

    submitCreate() {
        if (this.formCreateExternalSequence.valid) {
            // Convertir la fecha al formato YYYY-MM-DD aceptado por MySQL
            const fechaInicioFormatted = this.formatDate(this.formCreateExternalSequence.value.fecha_inicio);
            const fechaFinalFormatted = this.formatDate(this.formCreateExternalSequence.value.fecha_final);

            // Asignar las fechas formateadas de nuevo al formulario
            this.formCreateExternalSequence.patchValue({
                fecha_inicio: fechaInicioFormatted,
                fecha_final: fechaFinalFormatted
            });

            // Llamar al método para crear la secuencia externa
            this.newExternalSequence();
        } else {
            this.formCreateExternalSequence.markAllAsTouched();
        }
    }

    // Función para formatear la fecha al formato YYYY-MM-DD
    formatDate(dateString: string): string {
      //  console.log()
        const date = new Date(dateString);
        const year = date?.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
    }



    newExternalSequence() {
        this.visibleModalExternalSequence = true;
        this.spinner.show();
        let dataExternalSequence = this.formCreateExternalSequence.value;
        dataExternalSequence.hotel_id = dataExternalSequence.hotel_id['id'];
        dataExternalSequence.tipo_operacion_id = dataExternalSequence.tipo_operacion_id.id;
        dataExternalSequence.estado = 1;

        this.ExternalSequenceService.createExternalSequence(
            dataExternalSequence
        ).subscribe(
            (response: any) => {
                this.spinner.hide();
                this.imagen = null;
                this.visibleModalExternalSequence = false;
                if (response.code == 'success') {
                    Swal.fire({
                        title: 'Exito',
                        text: 'Recibo creado exitosamente.',
                        icon: 'success',
                    });

                    this.getIndex();
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error al crear el recibo.',
                        icon: 'error',
                    });
                }
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    //Editar

    editExternalSequence(id: number) {
        this.idEditando = id;
        this.spinner.show();
        this.ExternalSequenceService.getExternalSequence(id).subscribe(
            (response: any) => {
                this.spinner.hide();
                this.hotel = response.hotel;
                const secuenciaExterna = response.secuencia_externa;
                this.tipoOperacion = response.tipo_operacion;

                if (secuenciaExterna && 'prefijo' in secuenciaExterna) {
                    // Formatear las fechas antes de asignarlas al formulario
                    this.secuenciaInicial = secuenciaExterna.secuencia_incial;
                    this.secuenciaActual = secuenciaExterna.secuencia_actual;
                    this.secuenciaFinal = secuenciaExterna.secuencia_final;
                    this.fechaInicial = (secuenciaExterna.fecha_inicio)

                    this.fechaFinal = (secuenciaExterna.fecha_final)

                    this.prefijo = secuenciaExterna.prefijo;
                    let hotel: any;
                    let tipoOperacion: any;

                    response.hotel.forEach(element => {
                        if (element.id == secuenciaExterna.hotel_id) {
                            hotel = element;
                        }
                    });


                    response.tipo_operacion.forEach(element => {
                        if (element.id == secuenciaExterna.tipo_operacion_id) {
                            tipoOperacion = element;
                        }
                    });


                    // Asignar los valores al formulario de edición
                    this.formEditExternalSequence.patchValue({
                        hotel_id: hotel,
                        tipo_operacion_id: tipoOperacion,
                        prefijo: this.prefijo,
                        fecha_inicio: this.datePipe.transform(new Date(this.fechaInicial), 'yyyy/MM/dd'),
                        fecha_final: this.datePipe.transform(new Date(this.fechaFinal), 'yyyy/MM/dd'),
                        secuencia_incial: this.secuenciaInicial,
                        secuencia_actual: this.secuenciaActual,
                        secuencia_final: this.secuenciaFinal,
                    });
                }

                // Abrir el modal de edición después de asignar los valores
                setTimeout(() => {
                    this.visibleModalExternalSequenceEditar = true;
                }, 1);
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }


    updateExternalSequence() {
        this.spinner.show();
        let dataExternalSequence = this.formEditExternalSequence.value;
        dataExternalSequence.hotel_id = dataExternalSequence.hotel_id.id;
        dataExternalSequence.tipo_operacion_id = dataExternalSequence.tipo_operacion_id.id;
        dataExternalSequence.id = this.idEditando;
        dataExternalSequence.estado = 1;

        this.ExternalSequenceService.updateExternalSequence(
            dataExternalSequence
        ).subscribe(
            (response: any) => {
                this.spinner.hide();
                this.imagen = null;
                this.visibleModalExternalSequenceEditar = false;
                if (response.code == 'success') {
                    Swal.fire({
                        title: 'Éxito',
                        text: 'Recibo actualizado exitosamente.',
                        icon: 'success',
                    });

                    this.getIndex();
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error al actualizar el recibo.',
                        icon: 'error',
                    });
                }
            },
            (error) => {
                console.log('Error: ', error);
            }
        );
    }

    submitUpdate() {
        if (this.formEditExternalSequence.valid) {
            const fechaInicioFormatted = this.formatDate(this.formEditExternalSequence.value.fecha_inicio);
            const fechaFinalFormatted = this.formatDate(this.formEditExternalSequence.value.fecha_final);

            // Asignar las fechas formateadas de nuevo al formulario
            this.formEditExternalSequence.patchValue({
                fecha_inicio: fechaInicioFormatted,
                fecha_final: fechaFinalFormatted
            });
            this.updateExternalSequence();
        }
    }

    //Eliminar

    confirmDelete(id: number) {
        Swal.fire({
            title: '¿Estas seguro que deseas eliminar éste recibo?',
            text: 'Ten cuidado, esta acción no se prodrá revertir',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, Confirmar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                this.spinner.show();
                this.ExternalSequenceService.deleteExternalSequence({
                    id,
                }).subscribe(
                    (response: any) => {
                        this.spinner.hide();
                        if (response.code == 'success') {
                            Swal.fire({
                                title: 'Exito',
                                text: 'Recibo eliminado exitosamente.',
                                icon: 'success',
                            });

                            this.getIndex();
                        } else {
                            Swal.fire({
                                title: 'Error',
                                text: 'Error al eliminar el recibo.',
                                icon: 'error',
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

    buildForm() {
        this.formSearch = this.FB.group({
            search: ['', []],
        });

        this.formCreateExternalSequence = this.FB.group({
            hotel_id: ['', [Validators.required]],
            prefijo: ['', [Validators.required]],
            fecha_inicio: ['', [Validators.required]],
            fecha_final: ['', [Validators.required]],
            secuencia_incial: ['', [Validators.required]],
            secuencia_actual: ['', [Validators.required]],
            secuencia_final: ['', [Validators.required]],
            tipo_operacion_id: ['', [Validators.required]],
        });

        this.formEditExternalSequence = this.FB.group({
            hotel_id: ['', [Validators.required]],
            prefijo: ['', [Validators.required]],
            fecha_inicio: ['', [Validators.required]],
            fecha_final: ['', [Validators.required]],
            secuencia_incial: ['', [Validators.required]],
            secuencia_actual: ['', [Validators.required]],
            secuencia_final: ['', [Validators.required]],
            tipo_operacion_id: ['', [Validators.required]],
        });
    }

    getMaxDate1()
    {
      const fechaFinal = this.formEditExternalSequence?.get('fecha_final')?.value;
      return fechaFinal ? new Date(fechaFinal) : null;
    }

    getMaxDate2()
    {
        const fechaFinal = this.formEditExternalSequence?.get('fecha_inicio')?.value;
        return fechaFinal ? new Date(fechaFinal) : null;
    }

    getIndex(search: string = '', pageCount: number = this.pageCount, page: number = 1) {
        this.spinner.show();
        this.loadingTable = true;
        this.ExternalSequenceService.getAll(pageCount, search, page).subscribe(
            (response: any) => {
                this.loadingTable = false;
                this.externalSequenceData = response.data;
                this.ultimaPage = response.last_page;
                this.countRegisters = response.total;
                this.ultimaPage = response.last_page;
                if (response.total > pageCount) {
                    this.disablePageRight = true;
                }
                this.validatePage();
                this.spinner.hide();
            },
            (error) => {
                console.log('Error: ', error);
                this.spinner.hide();
            }
        );
    }

    //Buscador

    searchInput() {
        let search = this.formSearch.get('search').value;
        this.pageActual = 1;
        if (search == '') {
            this.getIndex(search);
        }
    }

    search() {
        let search = this.formSearch.get('search').value;
        this.getIndex(search);
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
