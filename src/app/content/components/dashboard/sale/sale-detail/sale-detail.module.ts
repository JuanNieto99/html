import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from "ngx-spinner";
import { PaginatorModule } from 'primeng/paginator';
import { AccordionModule } from 'primeng/accordion';
import { TagModule } from 'primeng/tag';
import { ChipModule } from "primeng/chip";
import { ChipsModule } from "primeng/chips";
import { MessageModule } from 'primeng/message';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import { AdminInterceptor } from 'src/app/content/interceptors/admin.interceptor';

import { SaleDetailRoutingModule } from './sale-detail-routing.module';
import { SaleService } from 'src/app/content/service/sale/sale.service';
import { SaleDetailComponent } from './sale-detail.component';
import { ClientesModule } from '../../../admin/clientes/clientes.module';


@NgModule({
  imports: [
    CommonModule,
    SaleDetailRoutingModule,
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
    ReactiveFormsModule,
    NgxSpinnerModule,
    PaginatorModule,
    AccordionModule,
    TagModule,
    MultiSelectModule,
    ChipModule,
    ChipsModule,
    MessageModule,
    SplitButtonModule,
    TabViewModule,
    ClientesModule
  ],
    providers: [{
        provide:HTTP_INTERCEPTORS,
        useClass:AdminInterceptor,
        multi:true
        },
        SaleService
    ],
    declarations: []
})
export class SaleDetailModule { }
