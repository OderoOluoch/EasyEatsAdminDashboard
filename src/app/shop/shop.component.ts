import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';
import { Shop } from '../shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  // shops: Shop[] = [
  //   new Shop(1, 'La Ratatulie', 'For the best Italian cuisines'),
  //   new Shop(2, 'Mama Nyama', 'Need your chomas hot, we got you covered.'),
  //   new Shop (3, 'Americana Hotel', 'Nothing Tastes better than American Burgers..'),
  //   new Shop (4, 'Tamu Tamu Dishes', 'Get an experience of the Coast in your plate'),
  //   new Shop (5, 'Purple Hibiscus Hotel', 'Wanna go natural, try our drinks.. Best served cold'),
  // ];
  // getApiService: any;
  shops: any;
// tslint:disable-next-line:ban-types
name: string;
  // tslint:disable-next-line:typedef
  deleteShop(isComplete: any, index: any){
    if (isComplete){
      const toDelete = confirm(`Are you sure you want to delete ${this.shops[index].name}?`);

      if (toDelete){
        this.shops.splice(index, 1);
      }
    }
  }

  // tslint:disable-next-line:typedef
  addNewShop(shop: Shop) {
    const shoplength  = this.shops.length;
    shop.id = shoplength + 1;
    // Shop.name = shop;
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


