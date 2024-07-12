import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from '@angular/router';
import { Config } from '../storage/config';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from "sweetalert2";
import { LayoutService } from "src/app/layout/service/app.layout.service";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    private loginUrl: any;
    private updatePermiso: any;
    private baseUrl: string;

    constructor(private httpClient: HttpClient, private router: Router, public layoutService: LayoutService,) {
        this.baseUrl = Config.url;

        this.loginUrl = this.baseUrl + '/login';
        this.updatePermiso = this.baseUrl + '/getPermisosUsuario';
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        const currentUser = this.currentUserSubject.value;
        if (currentUser && currentUser.usuario && currentUser.usuario.theme_config) {
            this.applyUserTheme(JSON.parse(currentUser.usuario.theme_config));
        }
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    async login(formValue: any, spinner: NgxSpinnerService) {
        return this.httpClient.post<any>(`${this.loginUrl}`, formValue)
            .subscribe(data => {
                console.log(data)
                if (data.token) {
                    // Asegurarse de que theme_config incluye todos los campos necesarios
                    data.usuario.theme_config = JSON.stringify({
                        theme: data.usuario?.theme_config?.theme,
                        mode: data.usuario?.theme_config?.mode,
                        fontSize: data.usuario?.theme_config?.fontSize || 14, // valor por defecto si no está definido
                        menuMode: data.usuario?.theme_config?.menuMode || 'static' // valor por defecto si no está definido
                    });

                    localStorage.setItem('currentUser', JSON.stringify(data));

                    this.currentUserSubject.next(data);
                    const themeConfig = JSON.parse(data.usuario.theme_config);
                    this.applyUserTheme(themeConfig);
                    this.router.navigate(['/dashboard/dashboardRooms']);
                } else {
                    Swal.fire({
                        title: 'Información',
                        text: 'Correo o contraseña inválidos',
                        icon: 'info',
                    });
                }

                spinner.hide();
            });
    }

    private applyUserTheme(themeConfig: { theme: string, mode: string, fontSize: number, menuMode: string }) {
        if (this.isValidThemeConfig(themeConfig)) {
            const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
            const newHref = `assets/layout/styles/theme/${themeConfig.theme}/theme.css`;

            themeLink.href = newHref;

            themeLink.onload = () => {
                this.applyMode(themeConfig.mode);
                this.applyFontSize(themeConfig.fontSize);
                this.applyMenuMode(themeConfig.menuMode);
            };

            themeLink.onerror = () => {
                console.error(`Error loading theme: ${newHref}`);
            };
        } else {
            console.error('Invalid theme configuration:', themeConfig);
        }
    }

    private applyMenuMode(menuMode: string) {
        this.layoutService.config.menuMode = menuMode;
        if (menuMode === 'overlay') {
            this.layoutService.state.overlayMenuActive = true;
            this.layoutService.state.staticMenuDesktopInactive = false;
        } else {
            this.layoutService.state.overlayMenuActive = false;
            this.layoutService.state.staticMenuDesktopInactive = true;
        }
    }

    isValidThemeConfig(config: any): boolean {
        return config && config.theme && config.mode && typeof config.fontSize === 'number' && config.menuMode;
    }


    private applyFontSize(fontSize: number) {
        const body = document.body;
        body.style.fontSize = `${fontSize}px`;
    }

    private applyMode(mode: string) {
        const body = document.body;
        if (mode === 'dark') {
          body.classList.add('dark-mode');
          body.classList.remove('light-mode');
        } else {
          body.classList.add('light-mode');
          body.classList.remove('dark-mode');
        }
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    static hasPermission(codigo: string[]) {
        let currentUser = localStorage.getItem('currentUser');
        let json = JSON.parse(currentUser);
        let retorno = false;

        json?.usuario?.rol?.rol_permiso_detalle.forEach(element => {
            if (codigo.includes(element.permiso.codigo)) {
                retorno = true;
            }
        });

        return retorno;
    }

    getPermisosRefrescar(){
        let token = JSON.parse(localStorage.getItem('currentUser'))?.token ;
        if(token!=undefined){
            return this.httpClient.get<any>(`${this.updatePermiso}?token=${token}`)
            .subscribe(data => {
              data.token = token;
              // Guardar theme_config como cadena JSON
              data.usuario.theme_config = JSON.stringify(data.usuario.theme_config);
              localStorage.setItem('currentUser', JSON.stringify(data));
              this.currentUserSubject.next(data);
              const themeConfig = JSON.parse(data.usuario.theme_config);
              this.applyUserTheme(themeConfig);
            });
        }

        return false;

    }
}
