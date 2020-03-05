import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { SimilaresComponent } from './similares/similares.component';
import { DetallesComponent } from './detalles/detalles.component';



@NgModule({
  declarations: [ComentariosComponent, SimilaresComponent, DetallesComponent],
  imports: [
    CommonModule
  ],
  exports: [ComentariosComponent, SimilaresComponent, DetallesComponent]
})
export class ProductosModule {}
