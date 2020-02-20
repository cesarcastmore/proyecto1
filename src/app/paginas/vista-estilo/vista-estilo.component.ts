import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-estilo',
  templateUrl: './vista-estilo.component.html',
  styleUrls: ['./vista-estilo.component.css']
})
export class VistaEstiloComponent implements OnInit {

  estilo: any = {
    'font-family': 'Arial'
  }

  constructor() {

  }

  ngOnInit() {

  }

  setFamily(family: string): void {
    this.estilo['font-family'] = family;

  }
}
