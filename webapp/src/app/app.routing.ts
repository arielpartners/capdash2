/**
 * Created by ckstrong on 2/20/17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'forecasts', loadChildren: 'app/forecasts/forecasts.module#ForecastsModule'},
  {path: 'hotels', loadChildren: 'app/hotels/hotels.module#HotelsModule'},
  {path: 'units/offline-units', loadChildren: 'app/offline-units/offline-units.module#OfflineUnitsModule'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}