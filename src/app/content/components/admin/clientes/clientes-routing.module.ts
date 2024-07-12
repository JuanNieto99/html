import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

const routes: Routes = [];

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ClientesComponent , canActivate: [AuthGuard], data: { permissions: ['administracion.clientes'] }  }
		//{ path: '', component: DashboardComponent, canActivate: [AuthGuard], data: { permissions: ['recetas'] } },

	])],
	exports: [RouterModule]
})
export class ClientesRoutingModule { }
