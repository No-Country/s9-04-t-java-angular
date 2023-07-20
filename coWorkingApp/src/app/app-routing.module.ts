import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkspaceDetailsComponent } from './pages/workspace-details/workspace-details.component';
import { DetailsComponent } from './pages/workspace-details/details/details.component';
import { ReservationComponent } from './pages/workspace-details/reservation/reservation.component';
import { MapComponent } from './pages/map/map.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DireccionComponent } from './pages/direccion/direccion.component';
import { AnuncioModule } from './anuncio/anuncio.module';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { TituloComponent } from './anuncio/titulo/titulo.component';
import { DescripcionComponent } from './anuncio/descripcion/descripcion.component';
import { FotosComponent } from './anuncio/fotos/fotos.component';
import { ServiciosComponent } from './anuncio/servicios/servicios.component';
import { EspacioComponent } from './anuncio/espacio/espacio.component';
import { DireccionSiteComponent } from './anuncio/direccion/direccionSite.component';
import { TokenGuard } from './guards/token.guard';
import { UserDataComponent } from './pages/user-data/user-data.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [ TokenGuard ],
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
    path: 'register',
    component: RegistroComponent
  },
  {
    path: 'direccion',
    component: DireccionComponent
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
        canActivate: [ TokenGuard ]
      },
      {
        path: 'reservation',
        component: ReservationComponent,
      }
    ],
  },
  {
    path:'site',
    component: AnuncioComponent,
    children: [
      {path:'espacio', component: EspacioComponent},
      {path:'titulo', component: TituloComponent},
      {path:'descripcion', component: DescripcionComponent},
      {path:'fotos', component: FotosComponent},
      {path:'servicios', component: ServiciosComponent},
      {path:'direccionSite', component: DireccionSiteComponent},
    ],
  },
  {
    path:'site',
    component: AnuncioComponent,
    children: [
      {path:'espacio', component: EspacioComponent},
      {path:'titulo', component: TituloComponent},
      {path:'descripcion', component: DescripcionComponent},
      {path:'fotos', component: FotosComponent},
      {path:'servicios', component: ServiciosComponent},
      {path:'direccionSite', component: DireccionSiteComponent},
    ]
},
  {
    path: 'my-data',
    component: UserDataComponent
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
