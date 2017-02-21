/**
 * Created by ckstrong on 2/20/17.
 */
import { Routes, RouterModule } from '@angular/router';

import { HotelsComponent } from './hotels.component';

const HOTEL_ROUTES: Routes = [
  { path: 'hotels', component: HotelsComponent }
];

export const hotelsRouting = RouterModule.forChild(HOTEL_ROUTES);
