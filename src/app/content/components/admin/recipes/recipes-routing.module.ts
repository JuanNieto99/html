import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipesProductsComponent } from './recipes-products/recipes-products.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild([
		{ path: '', component: RecipesComponent,  canActivate: [AuthGuard], data: { permissions: ['gestionInventario.recetas'] } },
        { path: ':id/recipes-products', component: RecipesProductsComponent,  canActivate: [AuthGuard], data: { permissions: ['gestionInventario.recetas'] }}
	])],
	exports: [RouterModule]
})
export class RecipesRoutingModule { }
