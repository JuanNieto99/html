import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PermissionsComponent } from './permissions.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PermissionsComponent,  canActivate: [AuthGuard], data: { permissions: ['administracion.permisos'] } }
	])],
	exports: [RouterModule]
})
export class PermissionsRoutingModule { }