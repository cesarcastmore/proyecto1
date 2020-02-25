import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  public usuarios: Usuario[] = [{
    id: '1',
    nombre: 'Miguel',
    apellido: 'Hidalgo'

  }, {
    id: '2',
    nombre: 'Benito',
    apellido: 'Juarez'

  }, {
    id: '3',
    nombre: 'Pofirio',
    apellido: 'Diaz'
  }]

  constructor() {}

  ngOnInit() {




  }



  public borrar(id: string): void {

    for (let i = 0; i < this.usuarios.length; i++) {

      if (this.usuarios[i].id == id) {
        this.usuarios.splice(i, 1);
      }

    }

  }


  

}
