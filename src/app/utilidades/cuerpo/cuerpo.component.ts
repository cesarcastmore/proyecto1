import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  @Input() descripcion: string = "Estas es las descripcion del producto";

  constructor() {}

  ngOnInit() {}

}
