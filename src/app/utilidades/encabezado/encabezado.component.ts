import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
//https://angular.io/guide/lifecycle-hooks

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  @Input('nombre') titulo: string;

  public codigo: number = 123;

  public clase: string = "fondo";



  constructor() {
    console.log("CONTRUCTOR",this.titulo)
  }

  ngOnInit() {
    console.log("ngonInit", this.titulo);

    /*Inicializar variables, Inicializar el API, hacer una conexion o traes valores como cookies*/
  }


  public getStatus(): string {
    return "Nombre";
  }

  public getTotal(importe: number) {
    return importe * 1.16;
  }

}
