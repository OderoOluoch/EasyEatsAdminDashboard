import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [
    new Menu(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new  Menu(2, 'Buy Cookies', 'I have to buy cookies for the parrot'),
    new  Menu(3, 'Get new Phone Case', 'Diana has her birthday coming up soon'),
    new  Menu(4, 'Get Dog Food', 'Pupper likes expensive snacks'),
    new  Menu(5, 'Solve math homework', 'Damn Math'),
    new  Menu(6, 'Plot my world domination plan', 'Cause I am an evil overlord'),
  ];

menu: Menu[] = [
  new Menu(1, 'string', 'description')
];
// tslint:disable-next-line:typedef
addNewMenu(menu){
  const menuLength = this.menus.length;
  menu.id = menuLength + 1;
  // goal.completeDate = new Date(goal.completeDate)
  this.menus.push(menu);
}
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
