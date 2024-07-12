import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WalletsComponent } from './wallets.component';
import { DetailsWalletsComponent } from './details-wallets/details-wallets.component';
import { DetailsWalletsListComponent } from './details-wallets-list/details-wallets-list.component';
import { AuthGuard } from 'src/app/all/guards/permission.guard';
import { ShowDetailsWalletsComponent } from './show-details-wallets/show-details-wallets.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: WalletsComponent, canActivate: [AuthGuard], data: { permissions: ['gestionCajas'] } },
		{ path: ':id/abrirCaja', component: DetailsWalletsComponent,canActivate: [AuthGuard],  data: { permissions: ['gestionCajas.cajas.abrirCaja'] } },
		{ path: 'detail', component: DetailsWalletsListComponent,canActivate: [AuthGuard],  data: { permissions: ['gestionCajas'] } },
		{ path: ':id/showDetail', component: ShowDetailsWalletsComponent,canActivate: [AuthGuard],  data: { permissions: ['gestionCajas'] } }

	])],
	exports: [RouterModule]
})
export class WalletsRoutingModule { }