import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesEditComponent } from './employees-edit.component';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EmployeesEditComponent }
      ])],
  exports: [RouterModule]
})
export class EmployeesEditRoutingModule { }
