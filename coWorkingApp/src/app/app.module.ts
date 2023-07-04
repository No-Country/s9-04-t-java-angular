import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { WorkspaceCardComponent } from './components/workspace-card/workspace-card.component';
import { AverageRatingPipe } from './pipes/average-rating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkspaceCardComponent,
    AverageRatingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
