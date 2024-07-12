import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoomsComponent } from './dashboard-rooms.component';
import { DashboardRoomsOcuparComponent } from './dashboard-rooms-ocupar/dashboard-rooms-ocupar.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

const routes: Routes = [];

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: DashboardRoomsComponent ,canActivate: [AuthGuard], data: { permissions: ['dashboard.habitacion'] } },
		{ path: ':idHabitacion/ocupar', component: DashboardRoomsOcuparComponent ,canActivate: [AuthGuard], data: { permissions: ['dashboard.habitacion'] }  }
	])],
	exports: [RouterModule]
})
export class DashboardRoomsRoutingModule { }
