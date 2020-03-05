import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pestania',
  templateUrl: './pestania.component.html',
  styleUrls: ['./pestania.component.css']
})
export class PestaniaComponent implements OnInit {

	@Input() pestanias: any[]=[];

	@Output() onTab: EventEmitter<string>= new EventEmitter<string>();


  constructor() { 
  	
  }

  ngOnInit() {

  }

  public clickTab(identificador: string){
  	this.onTab.emit(identificador);

  }

}
