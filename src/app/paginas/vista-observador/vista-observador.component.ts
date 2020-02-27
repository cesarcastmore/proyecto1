import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {debounceTime, filter} from 'rxjs/operators';

@Component({
  selector: 'app-vista-observador',
  templateUrl: './vista-observador.component.html',
  styleUrls: ['./vista-observador.component.css']
})
export class VistaObservadorComponent implements OnInit {

  cadena$: Observable < string >;
  lista$: Observable < any[] >;

    constructor() {}

  ngOnInit() {

    this.cadena$ = this.getObservable().pipe(filter(cadena=>{
    	return cadena== "CASTILLO"
    }));
    this.lista$ = this.getObservableList().pipe(debounceTime(2000));

    //Esto es escuchar el observable desde el controlador
    this.getObservable().subscribe(item => {
      console.log(item);

      /*Aqui hago los calculos con el stream del observable*/

    });

    //Asi funcion el asyncronico en javascript
    console.log("INICIO");

    setTimeout(() => {
      console.log("Ya pasaron 2 segundos");

    }, 2000);


    console.log("FIN");



    console.log("FIN 2");


  }


  getObservable(): Observable < string > {
    return Observable.create(observer => {

      //Esto ocurre en dos segundos
      setTimeout(() => {
        observer.next("CESAR");

      }, 2000);

      //Esto ocurre en 4 segundos y finaliza
      setTimeout(() => {

        observer.next("CASTILLO");
        observer.complete();

      }, 4000);


    });
  }



  getObservableList(): Observable < any[] > {
    return Observable.create(observer => {

      let arreglo: any = [];

      //Esto ocurre en dos segundos
      setTimeout(() => {

        arreglo.push({
          nombre: 'Coca',
          precio: 1
        })


        observer.next(arreglo);

      }, 1000);

      //Esto ocurre en 4 segundos y finaliza
      setTimeout(() => {

        arreglo.push({
          nombre: 'Pepsi',
          precio: 2
        })


        observer.next(arreglo);
        observer.complete();

      }, 2000);


    });
  }





}
