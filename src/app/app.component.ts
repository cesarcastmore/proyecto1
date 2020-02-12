import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyecto1';

  ngOnInit() {

    let nombre = "cesar";
    let nombre2: string = "cesar2";
    let nombre3: string = 'cesar3';

    //let nombre4: number= "cesar4"; 

    let booleano: boolean = true;
    let nombre4: any = "cesar";

    let nombre5: string | number = 3;

    let objecto1: any = {
      nombre: "cesar",
      apellido: "castillo"
    }

    let objecto2 = {
      nombre: "cesar2",
      apellido: "castillo"
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = objecto1.nombre;

    resultado.innerHTML = objecto2['nombre'];

    let atributo: string = "apellido";
    resultado.innerHTML = objecto1[atributo];

    let nulo: string = null;
    let fecha: Date = new Date();

    let arreglo: string[] = [];
    let arreglo2: string[] = ["a", "b", 'c'];


    let arreglo3: Array < string >= ["d", "f", "g"];


    //arrow functions
    let usuario: any = {
      nombre: "cesar",
      getNombre: ((): string => {
        //....
        //
        return nombre;
      }),
      setNombre: ((parametro: string): void => {
        nombre = parametro;

      })
    }

    usuario.setNombre("Felipe");
    resultado.innerHTML = usuario.getNombre();















  }


}
