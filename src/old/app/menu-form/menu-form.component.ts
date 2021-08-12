import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Menu } from '../../../app/models/menu';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {
   newMenu = new Menu(0, '', '');
   @Output() addMenu = new EventEmitter<Menu>();
   // tslint:disable-next-line:typedef
   submitMenu(){
     this.addMenu.emit(this.newMenu);
   }
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
  }

}
