import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    SearchFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
