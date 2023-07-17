import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspacioComponent } from './espacio/espacio.component';
import { TituloComponent } from './titulo/titulo.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { FotosComponent } from './fotos/fotos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { DireccionComponent } from './direccion/direccion.component';



@NgModule({
  declarations: [
    EspacioComponent,
    TituloComponent,
    DescripcionComponent,
    FotosComponent,
    ServiciosComponent,
    DireccionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AnuncioModule { }
