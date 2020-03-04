import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onSignOut: EventEmitter < boolean >= new EventEmitter < boolean > ();
  @Output() onClickMenu: EventEmitter < boolean >= new EventEmitter < boolean > ();


  constructor() {}

  ngOnInit() {}

  public clickMenu(){

  	this.onClickMenu.emit(true);

  }

  public clickSignOut(){
  	this.onSignOut.emit(true);

  }

}
