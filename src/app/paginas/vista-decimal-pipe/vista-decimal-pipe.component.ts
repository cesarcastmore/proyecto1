import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-decimal-pipe',
  templateUrl: './vista-decimal-pipe.component.html',
  styleUrls: ['./vista-decimal-pipe.component.css']
})
export class VistaDecimalPipeComponent implements OnInit {

  precio: number = 1;

  cantidad: number = 1;

  constructor() {}

  ngOnInit() {

  }

}
