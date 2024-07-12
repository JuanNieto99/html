import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HotelsService } from 'src/app/content/service/admin/hotels.service';
import { UsersService } from 'src/app/content/service/admin/users.service';
import { Permit } from 'src/app/content/models/admin/permissions.model';
import { PermissionsService } from 'src/app/content/service/admin/permissions.service';
import { BreadcrumbService } from 'src/app/content/service/breadcrumb.service';
import { DialogModule } from 'primeng/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastItem, ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/content/service/auth.service';

interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

@Component({
    selector: 'app-permisssions',
    templateUrl: './permissions.component.html',
    providers: [ConfirmationService, MessageService],
})
export class PermissionsComponent implements OnInit {

    public permisoCrear = AuthService.hasPermission(['administracion.permisos.crear']);
    public permisoActualizar = AuthService.hasPermission(['administracion.permisos.actualizar']);
    public permisoEliminar = AuthService.hasPermission(['administracion.permisos.eliminar']);

    public editarH: boolean = false;
    public crearH: boolean = false;
    public pageCount: number = 10;
    ////// Variables de obtencion de datos
    public permission: Permit[];
    public totalPermission: any;

    /// Variables para abrir modals
    public editarPermit: boolean = false;
    public crearPermit: boolean = false;
    public permissionData: any;
    public param: any;

    //Variables para paginador y buscador
    public pageActual: number = 1;
    public ultimaPage: number = 1;
    public disablePageLeft: boolean = false;
    public disablePageRight: boolean = false;
    public registrosContar: number = 0;
    public loadingTable: boolean = false;

    ///////// Forms Groups ////////////
    formSearch = new FormGroup({
        search: new FormControl('', []),
    });

    formNewP = new FormGroup({
        nombre: new FormControl('', Validators.required),
        codigo: new FormControl('', Validators.required),
        descripcion: new FormControl('', []),
    });

    formEditP = new FormGroup({
        nombre: new FormControl('', Validators.required),
        codigo: new FormControl('', Validators.required),
        id: new FormControl('', []),
    });
    changeDetector: any;

    ///////// Forms Groups ////////////
    constructor(
        private permissionsService: PermissionsService,
        private spinner: NgxSpinnerService,
        private hotelsService: HotelsService,
        private confirmationService: ConfirmationService,
        private toastModule: ToastModule,
        private dialogModule: DialogModule,
        private messageService: MessageService,
        private usersService: UsersService,
        private breadcrumbService: BreadcrumbService,
        private tableModule: TableModule,
        private buttonModule: ButtonModule,
        private cdRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        // Inicializamos la consulta de hoteles
        this.getIndex();
        this.permissionsService.data.subscribe((permission) => {
            this.permission = permission;
        });
    }
    //////// Crear un nuevo Permiso //////////////////
    createPermission() {
        const datos = this.formNewP.value;
        this.formNewP.reset();
        this.permissionsService.CreatePermissions(datos).subscribe(
            (response) => {
                this.crearPermit = false;
                Swal.fire({
                    title: 'Confirmación',
                    text: 'El Permiso ha sido creado.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });
                this.getIndex();
            },
            (error) => {
                console.log('Error:', error);
            }
        );
    }
    /////// Consultar Todos los Permisos  ///////////

    getIndex(
        search: string = '',
        pageCount: number = this.pageCount,
        page: number = 1
    ) {
        this.spinner.show();
        this.loadingTable = true;
        this.permissionsService
            .getPermissions(pageCount, search, page)
            .subscribe(
                (response: any) => {
                    this.loadingTable = false;
                    this.permission = response.data;
                    this.totalPermission = response.total;
                    this.ultimaPage = response.last_page;
                    this.registrosContar = response.total;
                    this.ultimaPage = response.last_page;
                    if(response.total>pageCount){
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

    /////////// Consultar 1 hotel  //////////////
    getPermission(id: number) {
        this.permissionsService.getPermissionById(id).subscribe((response) => {
            this.permissionData = response;
            this.formEditP.get('nombre').setValue(response.nombre);
            this.formEditP.get('codigo').setValue(response.codigo);
            this.formEditP.get('codigo').disable();
            this.formEditP.get('id').setValue(response.id);
            this.editarPermit = true;
        });
    }

    /////////// Editar Permisos //////////////
    updatePermission() {
        this.formEditP.get('id').setValue(this.permissionData.id);
        const datos = this.formEditP.value;
        this.permissionsService.updatePermissions(datos).subscribe(
            (response) => {
                //Cierra el modal de edición
                this.editarPermit = false;
                //Actualiza la tabla de usuarios con el nuevo registro
                this.permissionsService.refresPermissionData();
                //Actualiza la tabla de usuarios con el nuevo registro
            },
            (error) => {
                console.log('Error:', error);
            }
        );
    }

    confirmDelete(id: number) {
        Swal.fire({
            title: '¿Estas Seguro que deseas eliminar el Permiso?',
            text: 'Ten cuidado esta acción no se prodrá reversar',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, Confirmar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                this.permissionsService
                    .deletePermissions(id)
                    .subscribe((response) => {
                        this.permissionsService.refresPermissionData();
                    });
                Swal.fire({
                    title: 'Confirmación',
                    text: 'El Permiso ha sido eliminado.',
                    icon: 'success',
                });
            }
        });
    }

    modalNewP() {
        this.crearPermit = true;
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

    onPage(event) {
        this.pageCount = event['rows'];
        this.getIndex('', this.pageCount);
    }

    //Paginador

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
