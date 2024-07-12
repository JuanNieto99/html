import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EmployeesComponent, canActivate: [AuthGuard], data: { permissions: ['administracion.facturacion'] } },
        { path: ':id/edit', component: EmployeesEditComponent, canActivate: [AuthGuard], data: { permissions: ['administracion.facturacion'] } },
        { path: 'employees-create', component: EmployeesCreateComponent, canActivate: [AuthGuard], data: { permissions: ['administracion.facturacion'] } }
    ])],
    exports: [RouterModule]
})
export class EmployeesRoutingModule { }

