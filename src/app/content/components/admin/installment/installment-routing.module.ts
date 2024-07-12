import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstallmentComponent } from './installment.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: InstallmentComponent, canActivate: [AuthGuard], data: { permissions: ['administracion.abono'] } }
    ])],
  exports: [RouterModule]
})
export class InstallmentRoutingModule { }
