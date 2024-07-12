import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesCreateComponent } from './employees-create.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: EmployeesCreateComponent }
  ])],
  exports: [RouterModule]
})
export class EmployeesCreateRoutingModule { }
