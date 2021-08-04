import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [
    new Menu(1, 'BreakFast', 'A healthy start to the day.'),
    new  Menu(2, 'Lunch', 'Flavorsome Lunch To Keep You Going'),
    new  Menu(3, 'Soft Drinks', 'enjoy our drinks made of  light and refreshing with all the flavors of a Shirley Temple you love'),
    new  Menu(4, 'Desserts', 'Bringing you your favorite desserts'),
    new  Menu(5, 'Snacks', 'The taste that you will definitely admire.'),
    new  Menu(6, 'DINNER', 'Hasty and tasty!'),
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
