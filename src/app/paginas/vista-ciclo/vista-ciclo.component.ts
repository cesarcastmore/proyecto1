import { Component, OnInit } from '@angular/core';
import {Articulo} from '../../modelos/articulo';

@Component({
  selector: 'app-vista-ciclo',
  templateUrl: './vista-ciclo.component.html',
  styleUrls: ['./vista-ciclo.component.css']
})
export class VistaCicloComponent implements OnInit {

	articulos: Articulo[]=[{
		nombre: "Refresco",
		descripcion: 'Liquido',
		precio: 11
	},{
		nombre: "Totitos",
		descripcion: 'Abarrotes',
		precio: 13
	},{
		nombre: "Tequila",
		descripcion: 'Bebida alcoholica',
		precio: 350
	},{
		nombre: "Hamburgueza",
		descripcion: 'Comida',
		precio: 55
	},{
		nombre: "Cafe",
		descripcion: 'Liquido',
		precio: 40
	}]

  constructor() { }

  ngOnInit() {
  }

}
