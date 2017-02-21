/**
 * Created by ckstrong on 2/20/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { offlineUnitsRouting } from './offline-units.routing';
import { OfflineUnitsComponent } from './offline-units.component';

@NgModule({
  imports: [
    CommonModule,
    offlineUnitsRouting
  ],
  declarations: [
    OfflineUnitsComponent
  ]
})
export class OfflineUnitsModule { }
