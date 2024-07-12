import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from "../service/app.layout.service";
import { MenuService } from "../app.menu.service";
import { ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { UsersService } from 'src/app/content/service/admin/users.service';

@Component({
    selector: 'app-config',
    templateUrl: './app.config.component.html'
})
export class AppConfigComponent implements OnInit {
    private currentUser: any;
    private token: string | null = null;

    @Input() minimal: boolean = false;

    scales: number[] = [12, 13, 14, 15, 16];
    currentThemeConfig: any = {};

    constructor(
        public layoutService: LayoutService,
        public menuService: MenuService,
        public cdr: ChangeDetectorRef,
        private usersService: UsersService,
        private spinner: NgxSpinnerService
    ) { }

    ngOnInit(): void {
        const storedData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        this.currentUser = storedData.usuario;
        this.token = storedData.token || null;

        const themeConfig = this.currentUser?.theme_config;
        if (themeConfig) {
            const parsedThemeConfig = JSON.parse(themeConfig);
            if (this.isValidThemeConfig(parsedThemeConfig)) {
                this.applyThemeConfig(parsedThemeConfig);
                this.currentThemeConfig = parsedThemeConfig;
                this.scale = parsedThemeConfig.fontSize;
            } else {
                console.error('Invalid theme configuration:', themeConfig);
            }
        }
    }

    isValidThemeConfig(config: any): boolean {
        return config && config.theme && config.mode && typeof config.fontSize === 'number';
    }

    get visible(): boolean {
        return this.layoutService.state.configSidebarVisible;
    }

    set visible(_val: boolean) {
        this.layoutService.state.configSidebarVisible = _val;
    }

    get scale(): number {
        return this.layoutService.config.scale;
    }

    set scale(_val: number) {
        this.layoutService.config.scale = _val;
    }

    get menuMode(): string {
        return this.layoutService.config.menuMode;
    }

    set menuMode(_val: string) {
        this.layoutService.config.menuMode = _val;
    }

    get inputStyle(): string {
        return this.layoutService.config.inputStyle;
    }

    set inputStyle(_val: string) {
        this.layoutService.config.inputStyle = _val;
    }

    get ripple(): boolean {
        return this.layoutService.config.ripple;
    }

    set ripple(_val: boolean) {
        this.layoutService.config.ripple = _val;
    }

    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }

    changeTheme(theme: string, mode: string) {
        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        const newHref = `assets/layout/styles/theme/${theme}/theme.css`;

        themeLink.href = newHref;

        themeLink.onload = () => {
            this.applyMode(mode);
            this.cdr.detectChanges();
        };
    }

    applyMode(mode: string) {
        const body = document.body;
        if (mode === 'dark') {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
        }
    }

    saveThemeConfiguration() {
        const userId = this.currentUser?.id;

        if (!userId || !this.token) {
            console.error('No authenticated user found or token missing.');
            return;
        }

        // Actualizar currentThemeConfig con los valores actuales, incluyendo menuMode
        this.currentThemeConfig = this.getCurrentThemeConfig();

        this.spinner.show();

        this.usersService.updateTheme(userId, this.currentThemeConfig, this.token).subscribe(
            (response: any) => {
                this.spinner.hide();
                if (response.message === 'Theme config updated successfully') {
                    Swal.fire({
                        title: 'Éxito',
                        text: 'Configuración de tema guardada exitosamente.',
                        icon: 'success',
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error almacenando la configuración del tema.',
                        icon: 'error',
                    });
                }
            },
            (error) => {
                this.spinner.hide();
                console.error('Error saving theme configuration:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Error saving theme configuration.',
                    icon: 'error',
                });
            }
        );
    }

    private getCurrentThemeConfig() {
        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        const theme = themeLink.href.split('/').slice(-2, -1)[0];
        const body = document.body;
        const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
        const fontSize = parseInt(document.documentElement.style.fontSize, 10);
        const menuMode = this.layoutService.config.menuMode; // Obtener el estado del menú desde LayoutService
        return { theme, mode, fontSize, menuMode };
    }

    private applyThemeConfig(themeConfig: any) {
        if (themeConfig) {
            const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
            const newHref = `assets/layout/styles/theme/${themeConfig.theme}/theme.css`;
            themeLink.href = newHref;

            const body = document.body;
            if (themeConfig.mode === 'dark') {
                body.classList.add('dark-mode');
                body.classList.remove('light-mode');
            } else {
                body.classList.add('light-mode');
                body.classList.remove('dark-mode');
            }

            document.documentElement.style.fontSize = themeConfig.fontSize + 'px';

            // Aplicar el estado del menú
            console.log('Applying menu mode:', themeConfig.menuMode);
            this.layoutService.config.menuMode = themeConfig.menuMode;
            this.layoutService.onConfigUpdate(); // Notificar a LayoutService sobre el cambio en menuMode
        }
    }

    decrementScale() {
        this.scale--;
        this.applyScale();
        this.currentThemeConfig.fontSize = this.scale;
    }

    incrementScale() {
        this.scale++;
        this.applyScale();
        this.currentThemeConfig.fontSize = this.scale;
    }

    applyScale() {
        document.documentElement.style.fontSize = this.scale + 'px';
    }
}
