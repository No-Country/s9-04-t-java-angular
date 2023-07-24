import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker'




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

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FinishComponent } from './finish/finish.component';





@NgModule({
  declarations: [
    EspacioComponent,
    TituloComponent,
    DescripcionComponent,
    FotosComponent,
    ServiciosComponent,
    DireccionSiteComponent,
    AnuncioComponent,
    FinishComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    DragDropModule,
    MatDatepickerModule
  ]
})
export class AnuncioModule { }
