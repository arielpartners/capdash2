/**
 * Created by ckstrong on 2/20/17.
 */

import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

export const appRoutes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'login', component: LoginComponent, pathMatch: 'full' },
  {path: 'forecasts', loadChildren: 'app/containers/forecasts/forecasts.module#ForecastsModule'},
  {path: 'hotels', loadChildren: 'app/containers/hotels/hotels.module#HotelsModule'},
  {path: 'units/offline-units', loadChildren: 'app/containers/offline-units/offline-units.module#OfflineUnitsModule'},
  {path: '**', component: PageNotFoundComponent }
];

