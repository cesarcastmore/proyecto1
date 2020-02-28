import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  public usuarios: Usuario[] =[];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {

    this.usuariosService.obtenerTodos().subscribe(resultado=>{
      this.usuarios= resultado;
    })




  }



  public borrar(id: string): void {

    for (let i = 0; i < this.usuarios.length; i++) {

      if (this.usuarios[i].id == id) {
        this.usuarios.splice(i, 1);
      }

    }

  }




}
