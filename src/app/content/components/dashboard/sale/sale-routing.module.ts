import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { SaleComponent } from './sale.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SaleComponent,  canActivate: [AuthGuard], data: { permissions: ['dashboard.venta'] } },
        { path: 'sale-detail', component: SaleDetailComponent,  canActivate: [AuthGuard], data: { permissions: ['dashboard.venta'] } }
    ])],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
