import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../modelos/articulo';

@Component({
  selector: 'tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  public articulo: Articulo = {
    precio: 12,
    nombre: 'Articulo',
    descripcion: 'Esta es una descripcion'
  }

  constructor() {}

  ngOnInit() {}

}
