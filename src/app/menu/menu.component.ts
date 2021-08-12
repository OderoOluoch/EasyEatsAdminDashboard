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
  menus: any;
  
   constructor( private getApiService: GetApiService) { }


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

  ngOnInit(): void {
      this.getApiService.apiCallMenus().subscribe((response: any) => {
         this.menus =  response;
         console.log(this.menus);

        // tslint:disable-next-line:no-string-literal

      });
    }

  }


