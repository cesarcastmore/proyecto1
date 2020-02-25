import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { UtilidadesModule } from '../utilidades/utilidades.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

@NgModule({
  declarations: [AgregarUsuarioComponent, ListaProductosComponent],
  imports: [
    CommonModule, UtilidadesModule, ReactiveFormsModule
  ],
  exports: [AgregarUsuarioComponent, ListaProductosComponent]
})
export class AdministracionModule {}
