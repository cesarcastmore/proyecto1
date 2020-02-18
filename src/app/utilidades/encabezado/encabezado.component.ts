import { Component, OnInit , Input } from '@angular/core';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

	@Input('nombre') titulo: string= "BLanca nieves";

	public codigo: number=123; 

	public clase:string= "fondo";



  constructor() { }

  ngOnInit() {
  }


  public getStatus(): string{
  	return "Nombre";
  }

  public getTotal(importe:  number){
  	return importe * 1.16;
  }

}
