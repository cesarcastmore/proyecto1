import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-productos',
  templateUrl: './vista-productos.component.html',
  styleUrls: ['./vista-productos.component.css']
})
export class VistaProductosComponent implements OnInit {


  public pestanias: any[] = [{
    identificador: 'Comentarios',
    titulo: 'Comentarios de Usuarios'
  }, {
    identificador: 'Detalles',
    titulo: 'Detalles y Caracteristicas del Producto'
  }, {
    identificador: 'Similares',
    titulo: 'Lo mas buscado'
  }]

  public identificador: string='Comentarios';




  constructor() {}

  ngOnInit() {}

}
