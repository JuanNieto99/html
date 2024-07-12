import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/content/service/admin/users.service';
import { User } from 'src/app/content/models/admin/users.model';
import { BreadcrumbService } from 'src/app/content/service/breadcrumb.service';
import { DialogModule } from 'primeng/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/content/service/auth.service';
import { Permiso } from 'src/app/content/api/rolesPermisos';
import { RolesService } from 'src/app/content/service/admin/roles.service';
import { Rol } from 'src/app/content/models/admin/roles.model';
import { LayoutService } from 'src/app/layout/service/app.layout.service';


@Component({
    templateUrl: './users.component.html',
    providers: [ConfirmationService, MessageService]
})
export class UsersComponent implements OnInit {

    public permisoCrear = AuthService.hasPermission(['administracion.usuario.crear']);
    public permisoActualizar = AuthService.hasPermission(['administracion.usuario.actualizar']);
    public permisoEliminar = AuthService.hasPermission(['administracion.usuario.eliminar']);
    public permisoAsignarHotel = AuthService.hasPermission(['administracion.usuario.asignarHotel']);

    public users: User[];
    public userData: any;
    public usuarios: any;
    public breadcrumbs: string[]; // declarar e inicializar la variable breadcrumbs
    public totalUsers: number;
    public visible: boolean = false;
    public visibleModalEditar: boolean = false;
    public selectedState: any = null;
    public selectedUserIndex = -1;
    public pageCount: number = 10;
    public pageActual: number = 1;
    public ultimaPage: number = 1;
    public disablePageLeft: boolean = false;
    public disablePageRight: boolean = false;
    public loadingTable: boolean = false;
    public first: number = 0;
    public rows: number = 8;
    public roles: Rol[]
    public opciones = [
        { nombre: "Si", value: 1 },
        { nombre: "No", value: 0 },
    ]

    formSearch = new FormGroup({
        search: new FormControl('', []),
    });

    formNuser = new FormGroup({
        usuario: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        rol_id: new FormControl('', Validators.required),
        superadmin: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)

    });

    formEuser = new FormGroup({
        usuario: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        rol_id: new FormControl('', Validators.required),
        superadmin: new FormControl('', Validators.required),
        id: new FormControl('', [])
    });

    constructor(
        private confirmationService: ConfirmationService,
        private spinner: NgxSpinnerService,
        private toastModule: ToastModule,
        private dialogModule: DialogModule,
        private messageService: MessageService,
        private usersService: UsersService,
        private breadcrumbService: BreadcrumbService,
        private tableModule: TableModule,
        private buttonModule: ButtonModule,
        private rolesService: RolesService,
        private layoutService: LayoutService
    ) {

    }

    ngOnInit(): void {
        this.getIndex();
        this.usersService.data.subscribe(users => {
            this.users = users;
        });
        this.breadcrumbService.currentBreadcrumbs.subscribe(breadcrumbs => this.breadcrumbs = breadcrumbs);

        this.rolesService.getRoles(999, '', 1).subscribe(
            (response: any) => {
                this.roles = response.data
            }
        )
    }

    onQuitItem(item: string): void {
        this.breadcrumbService.quitItem(item);
    }

    getIndex(search: string = '', pageCount: number = this.pageCount, page: number = 1): void {
        this.spinner.show();
        this.loadingTable = true;
        this.usersService.getAll(pageCount, search, page).subscribe(
            (response: any) => {
                this.loadingTable = false;
                this.users = response.data;
                this.ultimaPage = response.last_page;
                this.totalUsers = response.total;
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

    getAUser(id: number) {
        this.usersService.getById(id).subscribe(response => {
            this.userData = response;
            this.userData.id = id;
            this.formEuser.patchValue({
                usuario: this.userData.usuario,
                email: this.userData.email,
                rol_id: this.userData.rol_id,
                superadmin: this.userData.superadmin,
            });
            this.visibleModalEditar = true;
        });
    }

    getRolName(rol: number): string {
        if (rol === 1) {
            return 'Super Administrador';
        } else if (rol === 2) {
            return 'Administrador';
        } else if (rol === 3) {
            return 'Gestor';
        } else {
            return 'Rol no identificado';
        }
    }

    openNew() {
        this.visible = true;
        this.formNuser.reset();

    }

    async newUser() {
        const datos = this.formNuser.value;
        this.usersService.insertData(datos).subscribe(response => {
            if(response.code == 'success'){
                Swal.fire({
                    title: "Éxito",
                    text: "El usuario ha sido creado exitosamente.",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                });

                this.visible = false;
                this.usersService.refreshUsersData();
            }
        }, error => {
            if (error.status === 422) { // 422 es el código de estado para errores de validación
                this.visible = false
                let errorMessage = '';
                for (const key in error.error) {
                    if (error.error.hasOwnProperty(key) && errorMessage == '') {
                        errorMessage += `${key}: ${error.error[key]}\n`;
                    }
                }
                Swal.fire({
                    title: 'Error de validación',
                    text: errorMessage,
                    icon: 'warning',
                    timer: 2000,
                    showConfirmButton: false
                });
            } else {
                Swal.fire('Error', 'Ha ocurrido un error desconocido.', 'error');
            }
        });
    }

    updateUser() {
        this.formEuser.get('id').setValue(this.userData.id);
        const datos = this.formEuser.value;
        this.usersService.updateUser(datos).subscribe(response => {
            this.visibleModalEditar = false;

            //Actualiza el usuario actual en el topbar si es el mismo que se esta editando
            let currentUserObj = JSON.parse(localStorage.getItem('currentUser'));
            if(currentUserObj.usuario.id == datos.id){
                currentUserObj.usuario = {
                    ...currentUserObj.usuario,
                    email: datos.email,
                    rol_id: datos.rol_id,
                    usuario: datos.usuario
                };
                //TODO Revisar el resto de propiedades del localstorage
                localStorage.setItem('currentUser', JSON.stringify({usuario: currentUserObj.usuario, version: currentUserObj.version, token: currentUserObj.token}),);
                this.layoutService.reloadComponent();
            }

            Swal.fire({
                title: "Éxito",
                text: "El usuario ha sido actualizado exitosamente.",
                icon: "success",
                timer: 2000,
                showConfirmButton: false,

            });
            //Actualiza la tabla de usuarios con el nuevo registro
            this.usersService.refreshUsersData();
            //Actualiza la tabla de usuarios con el nuevo registro
        }, error => {
            console.log('Error:', error)
        });
    }

    deleteUser(id: number) {
        const params = {
            headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
            body: `id=${id}`
        };
        this.usersService.deleteUser(params).subscribe(response => {

            this.usersService.refreshUsersData();
        }, error => {
            console.log('Error:', error)
        });
    }

    confirmDelete(id: number) {
        Swal.fire({
            title: "¿Estas Seguro que deseas eliminar el usuario?",
            text: "Ten cuidado esta acción no se prodrá reversar",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, Confirmar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                this.deleteUser(id);
                Swal.fire({
                    title: "Éxito",
                    text: "El usuario ha sido eliminado.",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                });
            }
        });
    }

    //Buscar

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
