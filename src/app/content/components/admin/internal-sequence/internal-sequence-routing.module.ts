import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalSequenceComponent } from './internal-sequence.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: InternalSequenceComponent, canActivate: [AuthGuard], data: { permissions: ['administracion.secuenciaInterna'] } }
  ])],
    exports: [RouterModule]
})
export class InternalSequenceRoutingModule { }
