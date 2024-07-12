import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

const routes: Routes = [];

@NgModule({
imports: [RouterModule.forChild([
        { path: '', component: RoomsComponent,  canActivate: [AuthGuard], data: { permissions: ['administracion.habitacion'] } }
    ])],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
 