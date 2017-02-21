import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ForecastsModule } from './forecasts/forecasts.module';
import { HotelsModule } from './hotels/hotels.module';
import { OfflineUnitsModule } from './offline-units/offline-units.module';
import { HomeComponent } from './home.component';
import { appRouting } from './app.routing';
import { PageNotFoundComponent } from './page-not-found.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    SidebarComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    ForecastsModule,
    OfflineUnitsModule,
    HotelsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
