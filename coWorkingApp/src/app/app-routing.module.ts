import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkspaceDetailsComponent } from './pages/workspace-details/workspace-details.component';
import { DetailsComponent } from './pages/workspace-details/details/details.component';
import { ReservationComponent } from './pages/workspace-details/reservation/reservation.component';
import { MapComponent } from './pages/map/map.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CalendaryComponent } from './components/calendary/calendary.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'WOCO'
  },
  {
    path: 'map',
    component: MapComponent,
    title: 'User Location'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
<<<<<<< HEAD
    path: 'calendary',
    component: CalendaryComponent,
  },
  {
    path: 'registro',
=======
    path: 'register',
>>>>>>> 622b2e2d32e2fbc0f0c1a4d37149cf2c954e3111
    component: RegistroComponent
  },
  {
    path: 'workspace/:id',
    component: WorkspaceDetailsComponent,
    children: [
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full'
      },
      {
        path: 'details',
        component: DetailsComponent,
      },
      {
        path: 'reservation',
        component: ReservationComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
