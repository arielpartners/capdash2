import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {NgReduxModule} from '@angular-redux/store';
import {NgReduxRouterModule} from '@angular-redux/router';
import {RouterModule} from '@angular/router';

// This app's ngModules
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {ForecastsModule} from './containers/forecasts/forecasts.module';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './containers/home/home.component';
import {HotelsModule} from './containers/hotels/hotels.module';
import {ItemModule} from './core/ajax/item/item.module';
import {LoginComponent} from './containers/login/login.component';
import {OfflineUnitsModule} from './containers/offline-units/offline-units.module';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {StoreModule} from './store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ForecastsModule,
    FormsModule,
    HotelsModule,
    HttpModule,
    ItemModule,
    NgbModule.forRoot(),
    NgReduxModule,
    NgReduxRouterModule,
    OfflineUnitsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
