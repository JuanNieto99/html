import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
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
import { UsersService } from 'src/app/content/service/admin/users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminInterceptor } from '../../../interceptors/admin.interceptor';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RolesModule } from '../roles/roles.module';
import { UsersHotelComponent } from './users-hotel/users-hotel.component';
import { TreeModule } from 'primeng/tree';
import { HotelsService } from 'src/app/content/service/admin/hotels.service';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
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
        RolesModule,
        TreeModule,
        NgxSpinnerModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AdminInterceptor,
            multi: true
        },
        UsersService, HotelsService
    ],
    declarations: [UsersComponent, UsersHotelComponent]
})
export class UsersModule { }
