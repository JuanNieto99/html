import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RolesComponent } from './roles.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';
import { RolesPermisosComponent } from './roles-permisos/roles-permisos.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: RolesComponent, canActivate: [AuthGuard], data: { permissions: ['administracion.roles'] } },
        { path: 'rolesPermisos/:id', component: RolesPermisosComponent, canActivate: [AuthGuard], data: { permissions: ['administracion.roles'] } }
    ])],
    exports: [RouterModule]
})
export class RolesRoutingModule { }
