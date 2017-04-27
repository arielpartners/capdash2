import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgReduxModule} from '@angular-redux/store';
import {NgReduxRouterModule} from '@angular-redux/router';

// This app's ngModules

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {ForecastsModule} from './forecasts/forecasts.module';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {HotelsModule} from './hotels/hotels.module';
import {ItemModule} from './core/ajax/item/item.module';
import {OfflineUnitsModule} from './offline-units/offline-units.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {StoreModule} from './store/store.module';

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
    ItemModule,
    ForecastsModule,
    OfflineUnitsModule,
    HotelsModule,
    AppRoutingModule,
    NgReduxModule,
    NgReduxRouterModule,
    StoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
