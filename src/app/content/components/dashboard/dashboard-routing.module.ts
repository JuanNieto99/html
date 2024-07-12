import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductsTributeComponent } from './products/products-tribute/products-tribute.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

@NgModule({
    imports: [RouterModule.forChild([
    { path: '', component: DashboardComponent/*, canActivate: [AuthGuard], data: { permissions: ['recetas'] }*/ },
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
