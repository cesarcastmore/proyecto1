import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { UtilidadesModule } from '../utilidades/utilidades.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './servicios/usuarios.service';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';


@NgModule({
  declarations: [AgregarUsuarioComponent, ListaProductosComponent, EditarUsuarioComponent],
  imports: [
    CommonModule, UtilidadesModule, ReactiveFormsModule, HttpClientModule
  ],
  exports: [AgregarUsuarioComponent, ListaProductosComponent, EditarUsuarioComponent],
  providers: [UsuariosService]
})
export class AdministracionModule {}
