import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
