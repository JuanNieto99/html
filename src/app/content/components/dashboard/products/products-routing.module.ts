import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsTributeComponent } from './products-tribute/products-tribute.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

const routes: Routes = [];

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ProductsComponent, canActivate: [AuthGuard], data: { permissions: ['gestionInventario.productos'] } },
		{ path: ':id/impuesto', component: ProductsTributeComponent, canActivate: [AuthGuard], data: { permissions: ['gestionInventario.productos.detalle','gestionInventario.productos.impuestoProducto'] } }
	])],
	exports: [RouterModule]
})
export class ProductsRoutingModule { }
