import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { HotelsService } from 'src/app/content/service/admin/hotels.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminInterceptor } from '../../../interceptors/admin.interceptor';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RolesService } from 'src/app/content/service/admin/roles.service';
import { RolesPermisosComponent } from './roles-permisos/roles-permisos.component';
import { TreeModule } from 'primeng/tree';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
    imports: [
        CommonModule,
        RolesRoutingModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        SweetAlert2Module.forRoot(),
        ReactiveFormsModule, // import ReactiveFormsModule
        TreeModule,
        NgxSpinnerModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AdminInterceptor,
            multi: true
        },
        RolesService
    ],
    declarations: [RolesComponent, RolesPermisosComponent]
})
export class RolesModule { }
