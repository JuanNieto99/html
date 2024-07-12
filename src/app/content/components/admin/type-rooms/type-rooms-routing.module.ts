import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { TypeRoomsComponent } from './type-rooms.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: TypeRoomsComponent,  canActivate: [AuthGuard], data: { permissions: ['administracion.tipoHabitacion'] } }
	])],
  exports: [RouterModule]
})
export class TypeRoomsRoutingModule { }
