import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: HotelsComponent,canActivate: [AuthGuard], data: { permissions: ['administracion.hoteles'] }  }
	])],
	exports: [RouterModule]
})
export class HotelsRoutingModule { }
