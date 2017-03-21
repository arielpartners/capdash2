/**
 * Created by ckstrong on 2/20/17.
 */
import { Routes, RouterModule } from '@angular/router';

import { OfflineUnitsComponent } from './offline-units.component';

const OFFLINE_UNITS_ROUTES: Routes = [
  { path: 'offlineUnits', component: OfflineUnitsComponent }
];

export const offlineUnitsRouting = RouterModule.forChild(OFFLINE_UNITS_ROUTES);
