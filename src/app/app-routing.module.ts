import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaTarjetaComponent } from './paginas/vista-tarjeta/vista-tarjeta.component';
import { VistaBootstrapComponent } from './paginas/vista-bootstrap/vista-bootstrap.component';
import { VistaCondiccionComponent } from './paginas/vista-condiccion/vista-condiccion.component';
import { VistaCicloComponent } from './paginas/vista-ciclo/vista-ciclo.component';
import { VistaClaseComponent } from './paginas/vista-clase/vista-clase.component';
import { VistaEstiloComponent } from './paginas/vista-estilo/vista-estilo.component';
import { ModulosExternosComponent } from './paginas/modulos-externos/modulos-externos.component';
import { VistaSwitchComponent } from './paginas/vista-switch/vista-switch.component';

const routes: Routes = [{
  path: 'componentes/componentes',
  component: VistaTarjetaComponent
}, {
  path: 'modulos/bootstrap',
  component: VistaBootstrapComponent
}, {
  path: 'directivas/condiccion',
  component: VistaCondiccionComponent
}, {
  path: 'directivas/ciclo',
  component: VistaCicloComponent
}, {
  path: 'directivas/clase',
  component: VistaClaseComponent
}, {
  path: 'directivas/estilo',
  component: VistaEstiloComponent
}, {
  path: 'modulos/modulos_externos',
  component: ModulosExternosComponent
}, {
  path: 'directivas/switch',
  component: VistaSwitchComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
