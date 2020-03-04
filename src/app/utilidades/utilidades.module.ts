import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PieComponent } from './pie/pie.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './header/header.component';
import { PestaniaComponent } from './pestania/pestania.component';



@NgModule({
  declarations: [TarjetaComponent,
    EncabezadoComponent,
    CuerpoComponent,
    PieComponent, SpinnerComponent, HeaderComponent, PestaniaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TarjetaComponent, SpinnerComponent, HeaderComponent, PestaniaComponent]
})
export class UtilidadesModule {}
