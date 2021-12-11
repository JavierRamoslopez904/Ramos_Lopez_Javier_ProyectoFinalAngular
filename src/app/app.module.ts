import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CanalesComponent } from './vistas2/canales/canales.component';
import { CanalComponent } from './vistas2/canales/canal/canal.component';
import { TituloComponent } from './titulo/titulo.component';
import { AppRoutingModule } from './app-routing.module';
import { FormularioComponent } from './vistas2/formulario/formulario.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ImagenComponent } from './imagen/imagen.component'

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    CanalesComponent,
    CanalComponent,
    TituloComponent,
    FormularioComponent,
    PaginaNoEncontradaComponent,
    EstadisticasComponent,
    ImagenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
