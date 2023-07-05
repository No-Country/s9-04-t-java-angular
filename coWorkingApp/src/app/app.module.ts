import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkAccordionModule } from '@angular/cdk/accordion';

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
    LoginComponent,
    RegistroComponent,
    MapComponent,
    WorkspaceCardComponent,
    AverageRatingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    OverlayModule,
    CdkAccordionModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
