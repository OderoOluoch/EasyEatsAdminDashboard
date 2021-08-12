import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetApiService } from '../get-api.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // menus: Menu[] = [
  //   new Menu(1, 'BreakFast', 'A healthy start to the day.'),
  //   new  Menu(2, 'Lunch', 'Flavorsome Lunch To Keep You Going'),
  //   new  Menu(3, 'Soft Drinks', 'enjoy our drinks made of  light and refreshing with all the flavors of a Shirley Temple you love'),
  //   new  Menu(4, 'Desserts', 'Bringing you your favorite desserts'),
  // ];
  menus: any;


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
    this.menus.push(menu);
  }
  constructor( private getApiService: GetApiService) { }

  ngOnInit(): void {
      this.getApiService.apiCallMenus().subscribe((response: any) => {
         this.menus =  response;
         console.log(this.menus);

        // tslint:disable-next-line:no-string-literal

      });
    }
  }


