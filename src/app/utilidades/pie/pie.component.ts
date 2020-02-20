import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  @Input() precio: number = 12.33;
  cantidad: number = 1;

  importe: number = 0;

  @Output('obtenerImporte') onImporte: EventEmitter < number >= new EventEmitter < number > ();

  @Output() onSeleccionar: EventEmitter < boolean >= new EventEmitter < boolean > ();

  constructor() {}

  ngOnInit() {

    /*
sskfjsdfkjskfjsdkdfj
    


    setTimeout(() => {
      this.precio = 15.33;

    }, 3000);
*/


  }

  calculoImporte(event: any) {
    console.log(event);
    this.importe = event.target.value * 1.16;

  }

  calculaTotal() {
    //alert("Ya estoy aqui");
    let total = this.importe * this.cantidad;
    this.onImporte.emit(total);
  }

  seleccionar() {

    this.onSeleccionar.emit(true);

  }

}
