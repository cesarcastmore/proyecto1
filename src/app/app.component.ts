import { Component, OnInit } from '@angular/core';

import { Alcohol, Articulo, Fruta, Verdura, Impuestos} from './modelos';

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


    for (let i = 0; i < arreglo2.length; i++) {
      console.log(arreglo2[i]);
    }

    for (let valor of arreglo2) {
      console.log(valor);
    }


    let arreglo4: any[] = [{
      nombre: "cesar",
      apellido: "castillo"
    }, {
      nombre: "carlos",
      apellido: "rodriguez"
    }]

    for (let obj of arreglo4) {
      console.log(obj);
      console.log(obj.nombre);

    }

    arreglo4.forEach((item: any): void => {
      console.log(item)
    })

    //filter, map, find, sort

    let nombres: string[] = arreglo4.map(item => {
      return item.nombre;

    });

    console.log("NOMBRES", nombres);

    console.log(arreglo4[0].direccion);

    if (!arreglo4[0].direccion) {
      console.log("entro");
    }

    if ([].length) {
      console.log("estoy vacio");
    }

    if (["a", "b"].length) {
      console.log("ya tengo algo");
    }

    let valor_1: string;
    let valor_2: number = 1;

    if (valor_1 === undefined) {
      console.log("no tengo nada");
    }

    let usuario_cesar = {
      nombre: "cesar",
      apellido: "castillo"
    };

    for (let atributo in usuario_cesar) {
      console.log("atributo", atributo);
      console.log("valor", usuario_cesar[atributo]);
    }


    let lista_usuarios: any[] = [{
      nombre: "cesar",
      apellido: "castillo"
    }, {
      nombre: "carlos",
      apellido: "rodriguez"
    }, {
      nombre: "benito",
      apellido: "juarez"
    }, {
      nombre: "miguel",
      apellido: "hidalgo"
    }, {
      nombre: "juan",
      apellido: "escutia"
    }];


    let miguel_hidalgo = lista_usuarios.find(item => {
      return item.nombre == "miguel" && item.apellido == "hidalgo";
    });

    console.log("MIGUEL", miguel_hidalgo);


    let articulo: Articulo = {
      nombre: "refresco",
      precio: 12.32
    };

    articulo.precio = 10.50;

    let alcohol: Alcohol=new Alcohol(250, "Tequila");
    alcohol.porcentaje=0.3;

    let porcentaje= alcohol.getPorcentajeAlcohol();
    







    //">", "<", ">=", "<="


















  }


}
