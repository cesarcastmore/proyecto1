import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  precio: number = 12.33;

  constructor() {}

  ngOnInit() {

  	/*
sskfjsdfkjskfjsdkdfj
  	*/


    setTimeout(() => {
      this.precio = 15.33;

    }, 3000);



  }

}
