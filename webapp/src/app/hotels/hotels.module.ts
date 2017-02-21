import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { hotelsRouting } from './hotels.routing';
import { HotelsComponent } from './hotels.component';

@NgModule({
  imports: [
    CommonModule,
    hotelsRouting
  ],
  declarations: [
    HotelsComponent
  ]
})
export class HotelsModule { }
