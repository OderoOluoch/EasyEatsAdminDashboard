import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Shop } from '../shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
shops: any;
name: string;

constructor( private dataService: DataService) { }

  deleteShop(isComplete: any, index: any){
    if (isComplete){
      const toDelete = confirm(`Are you sure you want to delete ${this.shops[index].name}?`);

      if (toDelete){
        this.shops.splice(index, 1);
      }
    }
  }

  addNewShop(shop: Shop) {
    const shoplength  = this.shops.length;
    shop.id = shoplength + 1;
    this.shops.push(shop);
  }
 

  ngOnInit(): void {
      this.dataService.apiCallShops().subscribe((response: any) => {
         this.shops =  response;
         console.log(this.shops);

      });
    }
  }
