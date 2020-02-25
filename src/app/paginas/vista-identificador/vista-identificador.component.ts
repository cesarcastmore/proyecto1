import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-identificador',
  templateUrl: './vista-identificador.component.html',
  styleUrls: ['./vista-identificador.component.css']
})
export class VistaIdentificadorComponent implements OnInit {

  public id: string;
  public identificador: string;
  public fecha_inicio: string;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.identificador = this.activatedRoute.snapshot.params['identificador'];
    this.fecha_inicio = this.activatedRoute.snapshot.queryParams['fecha_inicio'];

    /*  aqui consulta mi api para traer el informacion del producto*/


  }

}
