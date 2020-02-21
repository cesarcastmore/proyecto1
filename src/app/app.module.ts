import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilidadesModule } from './utilidades/utilidades.module';
import { AdministracionModule } from './administracion/administracion.module';
import { ModulosExternosComponent } from './paginas/modulos-externos/modulos-externos.component';
import { VistaBootstrapComponent } from './paginas/vista-bootstrap/vista-bootstrap.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { VistaTarjetaComponent } from './paginas/vista-tarjeta/vista-tarjeta.component';
import { VistaCicloComponent } from './paginas/vista-ciclo/vista-ciclo.component';
import { VistaCondiccionComponent } from './paginas/vista-condiccion/vista-condiccion.component';
import { VistaSwitchComponent } from './paginas/vista-switch/vista-switch.component';
import { VistaClaseComponent } from './paginas/vista-clase/vista-clase.component';
import { VistaEstiloComponent } from './paginas/vista-estilo/vista-estilo.component';
import { VistaDecimalPipeComponent } from './paginas/vista-decimal-pipe/vista-decimal-pipe.component';
import { TransformarPipe } from './pipes/transformar.pipe';
import { VistaCustomizadaPipeComponent } from './paginas/vista-customizada-pipe/vista-customizada-pipe.component';
import { VistaRutasAnidadasComponent } from './paginas/vista-rutas-anidadas/vista-rutas-anidadas.component';
import { VistaOpcion1Component } from './paginas/vista-opcion1/vista-opcion1.component';
import { VistaOpcion2Component } from './paginas/vista-opcion2/vista-opcion2.component';
import { VistaOpcion3Component } from './paginas/vista-opcion3/vista-opcion3.component';
import { VistaOpcion4Component } from './paginas/vista-opcion4/vista-opcion4.component';


@NgModule({
  declarations: [
    AppComponent,
    ModulosExternosComponent,
    VistaBootstrapComponent,
    VistaTarjetaComponent,
    VistaCicloComponent,
    VistaCondiccionComponent,
    VistaSwitchComponent,
    VistaClaseComponent,
    VistaEstiloComponent,
    VistaDecimalPipeComponent,
    TransformarPipe,
    VistaCustomizadaPipeComponent,
    VistaRutasAnidadasComponent,
    VistaOpcion1Component,
    VistaOpcion2Component,
    VistaOpcion3Component,
    VistaOpcion4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilidadesModule,
    AdministracionModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
