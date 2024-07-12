import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { WalletService } from '../content/service/admin/wallet.service';
import { UsersService } from '../content/service/admin/users.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    nombreCaja: string = '';
    saldo : string = '';
    currentUser: string;
    currentRole: string;

    constructor(public layoutService: LayoutService, private walletService: WalletService, private usersService: UsersService) { }

    cerrarSesion(){
        localStorage.removeItem('currentUser');
        window.location.reload();
    }

    ngOnInit() {
        this.cargarSaldo();
         this.layoutService.getReloadObservable().subscribe(() => {
             this.cargarSaldo();
             this.updateUser();
            });

        this.updateUser();
    }

    cargarSaldo(){
        this.walletService.getSaldoCajaInfo().subscribe(element => {
            this.saldo = element.saldo;
            this.nombreCaja = element.nombre;
        })

    }

    updateUser(){
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')).usuario.usuario;
        this.currentRole = JSON.parse(localStorage.getItem('currentUser')).usuario.rol.nombre;
    }
}
