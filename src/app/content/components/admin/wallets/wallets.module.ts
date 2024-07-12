import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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
import { WalletsRoutingModule } from './wallets-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { PaginatorModule } from 'primeng/paginator';
import { WalletService } from 'src/app/content/service/admin/wallet.service';
import { HotelsService } from 'src/app/content/service/admin/hotels.service';
import { WalletsComponent } from './wallets.component';
import { DetailsWalletsComponent } from './details-wallets/details-wallets.component';
import { DetailsWalletsListComponent } from './details-wallets-list/details-wallets-list.component';
import { ShowDetailsWalletsComponent } from './show-details-wallets/show-details-wallets.component';

@NgModule({
    imports: [
        CommonModule,
        WalletsRoutingModule,
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
        NgxSpinnerModule,
        ReactiveFormsModule, // import ReactiveFormsModule
        NgxSpinnerModule,
        PaginatorModule
    ],
    providers: [
        {
            provide:HTTP_INTERCEPTORS,
            useClass:AdminInterceptor,
            multi:true
        },
        HotelsService, WalletService,
        DatePipe
    ],
    declarations: [WalletsComponent, DetailsWalletsComponent, DetailsWalletsListComponent, ShowDetailsWalletsComponent]
})
export class WalletsModule { }
