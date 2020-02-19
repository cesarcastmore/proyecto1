import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from '../../modelos/articulo';

@Component({
  selector: 'tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  public clase_coloreado: string = '';

  @Input() public articulo: Articulo = {
    precio: 12,
    nombre: 'Articulo',
    descripcion: 'Esta es una descripcion'
  }

  constructor() {}

  ngOnInit() {}


  public addImporte(importe: number) {
    console.log(importe);
  }

  colorear(event: boolean) {
    if (event)
      this.clase_coloreado = 'colorear_border'

  }

}
