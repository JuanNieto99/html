import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/content/service/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit {

    formLog: FormGroup;

    constructor(public layoutService: LayoutService, public router: Router, private authService: AuthService, private spinner: NgxSpinnerService) {
        this.formLog = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
        })
    }

    ngOnInit(): void {
    }

    async onSubmit() {
        if(this.formLog.valid){
            this.spinner.show();
            const response = await this.authService.login(this.formLog.value, this.spinner);
        }
    }
}
