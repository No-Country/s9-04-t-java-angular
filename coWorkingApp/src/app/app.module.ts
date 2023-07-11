import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { OverlayModule } from '@angular/cdk/overlay';
<<<<<<< HEAD
import { FullCalendarModule } from '@fullcalendar/angular';
=======
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CdkMenuModule } from '@angular/cdk/menu';
>>>>>>> 622b2e2d32e2fbc0f0c1a4d37149cf2c954e3111

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { WorkspaceDetailsComponent } from './pages/workspace-details/workspace-details.component';
import { DetailsComponent } from './pages/workspace-details/details/details.component';
import { ReservationComponent } from './pages/workspace-details/reservation/reservation.component';
import { MapComponent } from './pages/map/map.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CalendaryComponent } from './components/calendary/calendary.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkspaceCardComponent } from './components/workspace-card/workspace-card.component';
import { AverageRatingPipe } from './pipes/average-rating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    SearchFiltersComponent,
    WorkspaceDetailsComponent,
    DetailsComponent,
    ReservationComponent,
<<<<<<< HEAD
// <<<<<<< HEAD
    LoginComponent,
    RegistroComponent,
// =======
    MapComponent,
    LoginComponent,
    FooterComponent,
    CalendaryComponent
// >>>>>>> 51183b641e882060528cff771af2b948f09468df
=======
    RegistroComponent,
    MapComponent,
    LoginComponent,
    WorkspaceCardComponent,
    AverageRatingPipe
>>>>>>> 622b2e2d32e2fbc0f0c1a4d37149cf2c954e3111
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    OverlayModule,
<<<<<<< HEAD
    FullCalendarModule
=======
    CdkAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSliderModule,
    CdkMenuModule
>>>>>>> 622b2e2d32e2fbc0f0c1a4d37149cf2c954e3111
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
