import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../modelos/articulo';

@Component({
  selector: 'app-vista-tarjeta',
  templateUrl: './vista-tarjeta.component.html',
  styleUrls: ['./vista-tarjeta.component.css']
})
export class VistaTarjetaComponent implements OnInit {

  public articulo: Articulo = {
    nombre: 'Refresco',
    precio: 11,
    descripcion: 'Liquido'

  }

  constructor() {

  }

  ngOnInit() {
  	
  }

}
