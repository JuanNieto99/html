import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: InventoryComponent, canActivate: [AuthGuard], data: { permissions: ['gestionInventario.inventario'] } }
	])],
	exports: [RouterModule]
})
export class InventoryRoutingModule { }