import { InvoiceComponent } from './invoice.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

const routes: Routes = [];

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: InvoiceComponent , canActivate: [AuthGuard], data: { permissions: ['administracion.facturacion'] } }]),
    ],
    exports: [RouterModule],
})
export class InvoiceRoutingModule {}
