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
import { VistaRutasAnidadasComponent } from './paginas/vista-rutas-anidadas/vista-rutas-anidadas.component';
import { VistaOpcion1Component } from './paginas/vista-opcion1/vista-opcion1.component';
import { VistaOpcion2Component } from './paginas/vista-opcion2/vista-opcion2.component';
import { VistaOpcion3Component } from './paginas/vista-opcion3/vista-opcion3.component';
import { VistaOpcion4Component } from './paginas/vista-opcion4/vista-opcion4.component';

import { VistaLoginComponent } from './paginas/vista-login/vista-login.component';
import { VistaIdentificadorComponent } from './paginas/vista-identificador/vista-identificador.component';
import { VistaAgregarUsuarioComponent } from './paginas/vista-agregar-usuario/vista-agregar-usuario.component';
import { VistaUsuariosComponent } from './paginas/vista-usuarios/vista-usuarios.component';
import { VistaObservadorComponent } from './paginas/vista-observador/vista-observador.component';

import { VistaEditarUsuarioComponent } from './paginas/vista-editar-usuario/vista-editar-usuario.component';
import { VistaProductosComponent } from './paginas/vista-productos/vista-productos.component';
const routes: Routes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: VistaLoginComponent
  },
  {
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
  }, {
    path: 'productos/:id/:identificador',
    component: VistaIdentificadorComponent
  }, {
    path: 'usuarios',
    component: VistaUsuariosComponent
  }, {
    path: 'usuarios/agregar',
    component: VistaAgregarUsuarioComponent
  }, {
    path: 'usuarios/:id',
    component: VistaEditarUsuarioComponent
  }, {
    path: 'rutas/anidadas',
    component: VistaRutasAnidadasComponent,
    children: [{
      path: '',
      redirectTo: 'opcion-1',
      pathMatch: 'full'
    }, {
      path: 'opcion-1',
      component: VistaOpcion1Component
    }, {
      path: 'opcion-2',
      component: VistaOpcion2Component
    }, {
      path: 'opcion-3',
      component: VistaOpcion3Component
    }, {
      path: 'opcion-4',
      component: VistaOpcion4Component
    }]
  },

  {
    path: 'observador',
    component: VistaObservadorComponent
  },
  {
    path: 'productos',
    component: VistaProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
