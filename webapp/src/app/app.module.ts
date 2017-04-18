import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {NgReduxModule} from '@angular-redux/store';
import {NgReduxRouterModule} from '@angular-redux/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ForecastsModule} from './forecasts/forecasts.module';
import {HotelsModule} from './hotels/hotels.module';
import {OfflineUnitsModule} from './offline-units/offline-units.module';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app.routing';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SidebarComponent} from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        PageNotFoundComponent,
        SidebarComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        ForecastsModule,
        FormsModule,
        HotelsModule,
        HttpModule,
        NgbModule.forRoot(),
        NgReduxModule,
        NgReduxRouterModule,
        OfflineUnitsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
