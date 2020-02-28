import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../modelos/usuario';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url: string = "https://tecgurus-e7115.firebaseio.com/usuarios";

  constructor(private httpClient: HttpClient) {

  }

  obtenerTodos(): Observable < Usuario[] > {

    return this.httpClient.get(this.url + ".json").pipe(

      map(resultado => {
        let usuarios: Usuario[] = [];

        for (let atributo in resultado) {
          usuarios.push({
            id: atributo,
            nombre: resultado[atributo].nombre,
            apellido: resultado[atributo].apellido
          })

        }

        return usuarios;

      })
    );


  }


  obtener(id: string): Observable<Usuario>{

   return  this.httpClient.get<Usuario>(this.url + "/" + id + ".json");


  }


}
