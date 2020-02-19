import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-switch',
  templateUrl: './vista-switch.component.html',
  styleUrls: ['./vista-switch.component.css']
})
export class VistaSwitchComponent implements OnInit {
	
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
