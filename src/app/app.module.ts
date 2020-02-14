import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilidadesModule } from './utilidades/utilidades.module';
import { AdministracionModule } from './administracion/administracion.module';
import { ModulosExternosComponent } from './paginas/modulos-externos/modulos-externos.component';
import { VistaBootstrapComponent } from './paginas/vista-bootstrap/vista-bootstrap.component';


@NgModule({
  declarations: [
    AppComponent,
    ModulosExternosComponent,
    VistaBootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilidadesModule,
    AdministracionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
