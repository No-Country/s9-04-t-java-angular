import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkspaceDetailsComponent } from './pages/workspace-details/workspace-details.component';
import { DetailsComponent } from './pages/workspace-details/details/details.component';
import { ReservationComponent } from './pages/workspace-details/reservation/reservation.component';
import { MapComponent } from './pages/map/map.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

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
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'workspace',
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
