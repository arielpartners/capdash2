/**
 * Created by ckstrong on 2/20/17.
 */
import { Routes, RouterModule } from '@angular/router';

import { ForecastsComponent } from './forecasts.component';

const FORECAST_ROUTES: Routes = [
  { path: 'forecasts', component: ForecastsComponent }
];

export const forecastsRouting = RouterModule.forChild(FORECAST_ROUTES);
