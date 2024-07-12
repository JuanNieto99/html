import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCalendarComponent } from './dashboard-calendar.component';
import { DashboardCalendarRoomDetailComponent } from './dashboard-calendar-room-detail/dashboard-calendar-room-detail.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: DashboardCalendarComponent, canActivate: [AuthGuard], data: { permissions: ['dashboard.reserva'] }  },
    { path: ':id/detailRoom', component: DashboardCalendarRoomDetailComponent, canActivate: [AuthGuard], data: { permissions: ['dashboard.reserva'] } }
  ])],
    exports: [RouterModule]
})
export class DashboardCalendarRoutingModule { }
