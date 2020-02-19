import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-condiccion',
  templateUrl: './vista-condiccion.component.html',
  styleUrls: ['./vista-condiccion.component.css']
})
export class VistaCondiccionComponent implements OnInit {

  alert: string = 'primary';

  constructor() {}

  ngOnInit() {

    setTimeout(() => {
      this.alert = 'danger';

    }, 2000);
    
    setTimeout(() => {
      this.alert = 'success';

    }, 4000);

    setTimeout(() => {
      this.alert = 'info';

    }, 6000);
  }

}
