import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  public esValido: boolean = true;

  public usuario: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('Castillo')
  });


  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  public guardar() {


    console.log("USUARIO", this.usuario.value);
    console.log("Validez", this.usuario.valid);

    this.esValido = this.usuario.valid;


    this.usuario.reset();
    this.router.navigateByUrl("/usuarios");;

    /*this.usuario.patchValue({
      nombre: 'Cesar',
      apellido: 'Castillo'
    })*/


  }

}
