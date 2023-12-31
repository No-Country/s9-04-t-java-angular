import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CdkMenuModule } from '@angular/cdk/menu';




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
import { DireccionComponent } from './pages/direccion/direccion.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkspaceCardComponent } from './components/workspace-card/workspace-card.component';
import { AverageRatingPipe } from './pipes/average-rating.pipe';
import { ModalPersonsComponent } from './components/modal-persons/modal-persons.component';
import { AlertsReservationComponent } from './components/alerts-reservation/alerts-reservation.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ScheduleModalComponent } from './components/schedule-modal/schedule-modal.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { UserDataComponent } from './pages/user-data/user-data.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NgxStripeModule } from 'ngx-stripe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './pages/profile/profile.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';

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
    FooterComponent,
    CalendaryComponent,
    DireccionComponent,
    MapComponent,
    WorkspaceCardComponent,
    AverageRatingPipe,
    ModalPersonsComponent,
    AlertsReservationComponent,
    NavbarComponent,
    ScheduleModalComponent,
    PaymentComponent,
    UserDataComponent,
    ProfileComponent,
    SpinnerComponent,
    MyReservationsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    OverlayModule,
    CdkAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSliderModule,
    CdkMenuModule,
    NgxStripeModule.forRoot('pk_test_51NVGYhGIEEAsvBMUekPdJic0JYgOQ1M8ywO3EfZY2VeSNDvLaRc6m6qWQMokH6wuvx8SCrMbfEUEBGZn7s1P5z3900RVpcvUCg'),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
