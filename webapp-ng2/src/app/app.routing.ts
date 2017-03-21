/**
 * Created by ckstrong on 2/20/17.
 */
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'forecasts', loadChildren: 'app/forecasts/forecasts.module#ForecastsModule'},
  {path: 'hotels', loadChildren: 'app/hotels/hotels.module#HotelsModule'},
  {path: 'offlineUnits', loadChildren: 'app/offline-units/offline-units.module#OfflineUnitsModule'},
  {path: '**', component: PageNotFoundComponent }
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);
