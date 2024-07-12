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
import { AdminInterceptor } from '../../../interceptors/admin.interceptor';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from "ngx-spinner";
import { PaginatorModule } from 'primeng/paginator';
import { CalendarModule } from "primeng/calendar";
import { DashboardRoomsRoutingModule } from './dashboard-rooms-routing.module';
import { DashboardRoomsComponent } from './dashboard-rooms.component';
import { DashboardRoomsService } from 'src/app/content/service/dashboardRooms/dashboard-rooms.service';
import { AccordionModule } from 'primeng/accordion';
import { TagModule } from 'primeng/tag';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from "primeng/multiselect";
import { ChipModule } from "primeng/chip";
import { ChipsModule } from "primeng/chips";
import { PanelModule } from 'primeng/panel';
import { MessageModule } from 'primeng/message';
import { DatePipe } from '@angular/common';
import { DashboardRoomsOcuparComponent } from './dashboard-rooms-ocupar/dashboard-rooms-ocupar.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ClientesModule } from '../../admin/clientes/clientes.module';

@NgModule({
    imports: [
        PanelModule,
        CommonModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        MenuModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        OverlayPanelModule,
        InputNumberModule,
        DialogModule,
        SweetAlert2Module.forRoot(),
        ReactiveFormsModule, // import ReactiveFormsModule
        NgxSpinnerModule,
        PaginatorModule,
        DashboardRoomsRoutingModule,
        AccordionModule,
        TagModule,
        CalendarModule,
        MultiSelectModule,
        ChipModule,
        ChipsModule,
        MessageModule,
        SplitButtonModule,
        DropdownModule,
        InputSwitchModule,
        ClientesModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AdminInterceptor,
            multi: true
        },
        DashboardRoomsService,
        DatePipe,
    ],
    declarations: [DashboardRoomsComponent, DashboardRoomsOcuparComponent]
})
export class DashboardRoomsModule { }
