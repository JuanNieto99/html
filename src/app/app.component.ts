import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';
import { AuthService } from './content/service/auth.service';
import { WalletService } from './content/service/admin/wallet.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private primengConfig: PrimeNGConfig,
        private layoutService: LayoutService, 
        private authService: AuthService, 
        private walletService: WalletService
    ) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.layoutService.config = {
            ripple: false,                      //toggles ripple on and off
            inputStyle: 'outlined',             //default style for input elements
            menuMode: 'static',                 //layout mode of the menu, valid values are "static" and "overlay"
            colorScheme: 'light',               //color scheme of the template, valid values are "light" and "dark"
            theme: 'lara-dark-blue',         //default component theme for PrimeNG
            scale: 14                           //size of the body font size to scale the whole application
        };

        this.authService.getPermisosRefrescar(); 
    }

    getToken() {
        // Recuperamos el valor de currentUser del localStorage
        var currentUser = localStorage.getItem('currentUser');
    
        // Convertimos el valor de currentUser a un objeto JSON
        var currentUserObj = JSON.parse(currentUser);
    
        // Recuperamos el token del objeto JSON currentUserObj
        var token = currentUserObj.token;
    
        // Devolvemos el token
        return token;
      }
    
}
