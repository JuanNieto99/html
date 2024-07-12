import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AuthGuard } from '../all/guards/permission.guard';
import { AuthService } from '../content/service/auth.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Tablero',
                permisos: ['dashboard.habitacion', 'dashboard.reserva', 'dashboard.venta', /*'dashboard.empleado'*/],
                items: [
                    {
                        label: 'Habitaciones',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/dashboard/dashboardRooms'],
                        permisos: ['dashboard.habitacion'],
                    },
                    {
                        label: 'Reservas',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/dashboard/calendar'],
                        permisos: ['dashboard.reserva'],
                    },
                    {
                        label: 'Ventas',
                        icon: 'pi pi-fw pi-shopping-bag',
                        routerLink: ['/dashboard/dashboardSell'],
                        permisos: ['dashboard.venta'],
                    },

                ],
            },
            {
                label: 'Configurar',
                permisos: ['gestionInventario', 'gestionInventario.productos', 'gestionInventario.inventario', 'gestionInventario.recetas','administracion','administracion.hoteles', 'administracion.clientes', 'administracion.tipoHabitacion', 'administracion.habitacion', 'administracion.tarifa', 'administracion.facturacion', 'administracion.empleado','administracion.usuario' ,'administracion.roles' ,'administracion.permisos','administracion.secuenciaInterna','administracion.secuenciaExterna', 'gestionCajas', 'gestionCajas.cajas', 'gestionCajas.cajas.abrirCaja' ],
                items: [
                    {
                        label: 'Gestion inventario',
                        icon: 'pi pi-fw pi-cart-plus',
                        permisos: ['gestionInventario', 'gestionInventario.productos', 'gestionInventario.inventario', 'gestionInventario.recetas'],
                        items: [
                            {
                                label: 'Productos',
                                icon: 'pi pi-fw pi-box',
                                routerLink: ['/dashboard/products'],
                                permisos: ['gestionInventario.productos'],
                            },
                            {
                                label: 'Bodega',
                                icon: 'pi pi-fw pi-server',
                                routerLink: ['/dashboard/inventory'],
                                permisos: ['gestionInventario.inventario'],
                            },
                            {
                                label: 'Recetas',
                                icon: 'pi pi-book',
                                routerLink: ['/dashboard/admin/recipes'],
                                permisos: ['gestionInventario.recetas'],
                            },
                        ],
                    },
                    {
                        //
                        label: 'Administrar',
                        icon: 'pi pi-fw pi-sliders-h',
                        permisos: ['administracion', 'administracion.abono', 'administracion.hoteles', 'administracion.clientes', 'administracion.tipoHabitacion', 'administracion.habitacion', 'administracion.tarifa', 'administracion.facturacion', 'administracion.empleado'],
                        items: [
                            {
                                label: 'Abonos',
                                icon: 'pi pi-ticket',
                                routerLink: ['/dashboard/admin/installment'],
                                permisos: ['administracion.abono'],
                            },
                            {
                                label: 'Huéspedes',
                                icon: 'pi pi-users',
                                routerLink: ['/dashboard/admin/huespedes'],
                                permisos: ['administracion.clientes'],
                            },
                            {
                                label: 'Empleados',
                                icon: 'pi pi-user',
                                routerLink: ['/dashboard/employees'],
                                permisos: ['administracion.empleado'],
                            },
                            {
                                label: 'Facturación',
                                icon: 'pi pi-money-bill',
                                routerLink: ['/dashboard/dashboardFacturacion'],
                                permisos: ['administracion.facturacion'],
                            },
                            {
                                label: 'Habitaciones',
                                icon: 'pi pi-home',
                                routerLink: ['/dashboard/admin/rooms'],
                                permisos: ['administracion.habitacion'],
                            },
                            {
                                label: 'Hoteles',
                                icon: 'pi pi-building',
                                routerLink: ['/dashboard/admin/hotels'],
                                permisos: ['administracion.hoteles'],
                            },
                            {
                                label: 'Tarifa',
                                icon: 'pi pi-tag',
                                routerLink: ['/dashboard/admin/tarifas'],
                                permisos: ['administracion.tarifa'],
                            },
                            {
                                label: 'Tipo Habitación',
                                icon: 'pi pi-table',
                                routerLink: ['/dashboard/typeRooms'],
                                permisos: ['administracion.tipoHabitacion'],

                            },
                        ],
                    },
                    {
                        label: 'Seguridad',
                        permisos: ['administracion.usuario' ,'administracion.roles' ,'administracion.permisos'],
                        icon: 'pi pi-fw pi-shield',
                        items:[
                            {
                                label: 'Usuarios',
                                icon: 'pi pi-fw pi-user-plus',
                                routerLink: ['/dashboard/admin/users'],
                                permisos: ['administracion.usuario'],
                            },
                            {
                                label: 'Roles',
                                icon: 'pi pi-users',
                                routerLink: ['/dashboard/admin/roles'],
                                permisos: ['administracion.roles'],
                            },
                            {
                                label: 'Permisos',
                                icon: 'pi pi-key',
                                routerLink: ['/dashboard/admin/permissions'],
                                permisos: ['administracion.permisos'],
                            },
                        ],
                    },
                    {
                        label: 'Recibos',
                        permisos: ['administracion.secuenciaInterna','administracion.secuenciaExterna'],
                        icon: 'pi pi-fw pi-file-o',
                        items:[                            {
                            label: 'Recibos internos',
                            icon: 'pi pi-fw pi-book',
                            routerLink: [
                                '/dashboard/admin/internalSequence',
                            ],
                            permisos: ['administracion.secuenciaInterna'],
                        },
                        {
                            label: 'Recibos externos',
                            icon: 'pi pi-fw pi-book',
                            routerLink: [
                                '/dashboard/admin/externalSequence',
                            ],
                            permisos: ['administracion.secuenciaExterna'],
                        },]
                    },
                    {
                        label: 'Gestion cajas',
                        icon: 'pi pi-wallet',
                        permisos: ['gestionCajas', 'gestionCajas.cajas', 'gestionCajas.cajas.abrirCaja'],
                        items: [
                            {
                                label: 'Cajas',
                                icon: 'pi pi-wallet',
                                routerLink: ['/dashboard/admin/wallets'],
                                permisos: ['gestionCajas.cajas'],
                            },
                            {
                                label: 'Abrir y cerrar cajas',
                                icon: 'pi pi-wallet',
                                routerLink: ['/dashboard/admin/wallets/detail'],
                                permisos: ['gestionCajas.cajas.abrirCaja'],
                            },
                        ],
                    },
                ],
            },

        ];
    }

    validarPermiso(item){
        let retorno = AuthService.hasPermission(item.permisos);
        return retorno;

    }
}
