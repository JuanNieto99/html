import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarifaComponent } from './tarifa.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: TarifaComponent,  canActivate: [AuthGuard], data: { permissions: ['administracion.tarifa'] } }
    ]
  )],
  exports: [RouterModule]
})
export class TarifaRoutingModule { }
