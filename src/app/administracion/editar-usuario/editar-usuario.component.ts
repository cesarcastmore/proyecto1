import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  public esValido: boolean = true;

  public usuarioForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('')
  });


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService) {

  }

  ngOnInit() {
    let id: string = this.activatedRoute.snapshot.params['id'];

    this.usuariosService.obtener(id).subscribe(resultado => {
      this.usuarioForm.patchValue(resultado);

    });



  }

  public actualizar() {

    let usuario: Usuario = this.usuarioForm.value;
    usuario.id = this.activatedRoute.snapshot.params['id'];

    this.usuariosService.actualizar(usuario)
      .subscribe(usuario => {
        this.router.navigateByUrl("/usuarios");
      })

  }



}
