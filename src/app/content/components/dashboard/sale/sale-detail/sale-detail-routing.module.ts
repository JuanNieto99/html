import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleDetailComponent } from './sale-detail.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: SaleDetailComponent }
  ])],
  exports: [RouterModule]
})
export class SaleDetailRoutingModule { }
