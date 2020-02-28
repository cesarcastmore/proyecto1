import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { UsuariosService } from '../servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  public usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService,
    private router: Router) {}

  ngOnInit() {

    this.usuariosService.obtenerTodos().subscribe(resultado => {
      this.usuarios = resultado;
    })

  }


  public borrar(id: string): void {

    this.usuariosService.borrar(id).subscribe(item => {

      for (let i = 0; i < this.usuarios.length; i++) {
        if (this.usuarios[i].id == id) {
          this.usuarios.splice(i, 1);
        }
      }


    })



  }

  public editar(id: string) {
    this.router.navigateByUrl("usuarios/" + id);

  }




}
