import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspacioComponent } from './espacio/espacio.component';
import { TituloComponent } from './titulo/titulo.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { FotosComponent } from './fotos/fotos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { DireccionSiteComponent } from './direccion/direccionSite.component';
import { AnuncioComponent } from './anuncio.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';





@NgModule({
  declarations: [
    EspacioComponent,
    TituloComponent,
    DescripcionComponent,
    FotosComponent,
    ServiciosComponent,
    DireccionSiteComponent,
    AnuncioComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    DragDropModule
  ]
})
export class AnuncioModule { }
