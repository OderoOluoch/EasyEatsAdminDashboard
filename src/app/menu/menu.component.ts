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
  ]


    // tslint:disable-next-line:typedef
    deleteMenu(isComplete: any, index: any){
    if (isComplete){
      const toDelete = confirm(`Do you want to delete this ${this.menus[index].name}?`);

      if (toDelete){
        this.menus.splice(index, 1);
      }
    }
  }

  // tslint:disable-next-line:typedef
  addNewMenu(menu: Menu) {
    const menulength  = this.menus.length;
    menu.id = menulength + 1;
    // shop.name = shop
    this.menus.push(menu);
  }
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
