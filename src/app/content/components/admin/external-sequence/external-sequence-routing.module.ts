import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalSequenceComponent } from './external-sequence.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ExternalSequenceComponent, canActivate: [AuthGuard], data: { permissions: ['administracion.secuenciaExterna'] }  }
  ])],
    exports: [RouterModule]
})
export class ExternalSequenceRoutingModule { }
