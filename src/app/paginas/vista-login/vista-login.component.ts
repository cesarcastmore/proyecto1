import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-vista-login',
  templateUrl: './vista-login.component.html',
  styleUrls: ['./vista-login.component.css']
})
export class VistaLoginComponent implements OnInit {

  error: string;

  usuarioForm: FormGroup = new FormGroup({
    usuario: new FormControl(),
    contrasenia: new FormControl()
  });

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}


  login() {

    let usuario: string= this.usuarioForm.value.usuario;
    let contrasenia: string= this.usuarioForm.value.contrasenia;
    
    if (this.authService.login(usuario, contrasenia)) {

      localStorage.setItem("usuario", JSON.stringify(this.usuarioForm.value));
      this.router.navigateByUrl('/componentes/componentes');


    } else {
      this.error = "Tu contraseña o usuario es invalido";

    }
  }


}
