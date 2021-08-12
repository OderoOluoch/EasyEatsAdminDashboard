import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu } from '../../../app/models/menu';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {


    @Input () menu: Menu;
  @Output () isComplete = new EventEmitter<boolean>();

  // tslint:disable-next-line:typedef
  menuDelete(complete: boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
  }

}
