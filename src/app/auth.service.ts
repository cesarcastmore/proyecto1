import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public activo: boolean = false;



  constructor(private router: Router) {


  }

  public login(usuario: string, contrasenia: string) {
    if (usuario == "cesar.cast.more@gmail.com" &&
      contrasenia == "123456") {

      this.activo = true;

      return true;


    }
  }

  public esActivo() {

    let usuario: any = JSON.parse(localStorage.getItem('usuario'));

    if (usuario == null) {
      this.router.navigateByUrl("/login");
      this.activo = false;

    }

    if (usuario.usuario == 'cesar.cast.more@gmail.com') {
      this.activo = true;
      //this.router.navigateByUrl("/componentes/componentes");

    } else {
      this.router.navigateByUrl("/login");
      this.activo = false;
    }



  }

  public salir() {
    localStorage.clear();
    this.router.navigateByUrl("/login");
    this.activo = false;
  }
}
