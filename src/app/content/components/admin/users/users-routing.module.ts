import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';
import { UsersHotelComponent } from './users-hotel/users-hotel.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UsersComponent, canActivate: [AuthGuard], data: { permissions: ['administracion.usuario'] } },
        { path: 'usersHotel/:id', component: UsersHotelComponent, canActivate: [AuthGuard], data: { permissions: ['administracion.usuario.asignarHotel'] } }
    ])],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
