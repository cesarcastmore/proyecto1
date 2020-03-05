import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { UsuariosService } from '../servicios/usuarios.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { SpinnerService } from '../../spinner.service';
import { NotifierService } from "angular-notifier";


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  public usuarios: Usuario[] = [];
  private readonly notifier: NotifierService;

  buscarForm: FormGroup = new FormGroup({
    termino: new FormControl('')
  })

  constructor(private usuariosService: UsuariosService,
    private router: Router, public spinnerService: SpinnerService,
    notifierService: NotifierService) {
    this.notifier = notifierService;

  }

  ngOnInit() {

    this.spinnerService.activo = true;

    this.usuariosService.obtenerTodos().subscribe(resultado => {
      this.spinnerService.activo = false;
      this.usuarios = resultado;
      this.notifier.notify("success", "Se cargaron los usuarios");

    })

    this.buscarForm.valueChanges.subscribe(valor => {
      console.log(valor);

    });

  }


  public borrar(id: string): void {

    this.usuariosService.borrar(id).subscribe(item => {

      for (let i = 0; i < this.usuarios.length; i++) {
        if (this.usuarios[i].id == id) {
          this.usuarios.splice(i, 1);
          this.notifier.notify("success", "Se borro el usuario");

        }
      }


    })



  }

  public editar(id: string) {
    this.router.navigateByUrl("usuarios/" + id);

  }




}
