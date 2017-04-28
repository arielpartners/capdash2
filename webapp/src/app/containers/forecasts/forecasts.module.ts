import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { forecastsRouting } from './forecasts.routing';
import { ForecastsComponent } from './forecasts.component';

@NgModule({
  imports: [
    CommonModule,
    forecastsRouting
  ],
  declarations: [
    ForecastsComponent
  ]
})
export class ForecastsModule { }
