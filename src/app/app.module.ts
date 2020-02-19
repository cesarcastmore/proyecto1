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


@NgModule({
  declarations: [
    AppComponent,
    ModulosExternosComponent,
    VistaBootstrapComponent,
    VistaTarjetaComponent,
    VistaCicloComponent,
    VistaCondiccionComponent
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
