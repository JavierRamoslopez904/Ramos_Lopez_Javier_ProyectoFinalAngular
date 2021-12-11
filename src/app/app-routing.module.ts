import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ImagenComponent } from './imagen/imagen.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { CanalesComponent } from './vistas2/canales/canales.component';
import { FormularioComponent } from './vistas2/formulario/formulario.component';


const routes : Routes = [
  {path: 'canales', component: CanalesComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'imagen', component: ImagenComponent},
  {path: 'estadisticas',component:EstadisticasComponent},

  {path: '', redirectTo: '/canales', pathMatch: 'full'},
  {path: '**', component:PaginaNoEncontradaComponent}

];

@NgModule({
  exports : [RouterModule],
  imports : [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
