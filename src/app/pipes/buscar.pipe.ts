import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(usuarios: Usuario[], termino: string): any {
    console.log(termino);

    if (!termino) {
      return usuarios;
    }

    if (termino == '') {
      return usuarios;
    }

    return usuarios.filter(usuario => {
      return usuario.nombre.toLowerCase().includes(termino.toLowerCase()) ||
        usuario.apellido.toLowerCase().includes(termino.toLowerCase());

    });



  }

}
