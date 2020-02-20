import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-customizada-pipe',
  templateUrl: './vista-customizada-pipe.component.html',
  styleUrls: ['./vista-customizada-pipe.component.css']
})
export class VistaCustomizadaPipeComponent implements OnInit {

	descripcion: string='';

  constructor() { }

  ngOnInit() {
  }

}
