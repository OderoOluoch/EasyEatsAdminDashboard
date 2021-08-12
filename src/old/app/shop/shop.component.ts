import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';
import { Shop } from '../../../app/models/shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {


  shops: any;

name: string;

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
  constructor( private getApiService: GetApiService) { }

  ngOnInit(): void {
      this.getApiService.apiCall().subscribe((response: any) => {
         this.shops =  response;
         console.log(this.shops);

        // tslint:disable-next-line:no-string-literal

      });
    }
  }

