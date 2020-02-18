import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

	descripcion: string="Estas es las descripcion del producto";

  constructor() { }

  ngOnInit() {
  }

}
