import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shops: Shop[] = [
    new Shop( 'La Ratatulie', 'For the best Italian cuisines'),
    new Shop('Mama Nyama', 'Need your chomas hot, we got you covered.'),
    new Shop ('Americana Hotel', 'Nothing Tastes better than American Burgers..'),
    new Shop ('Tamu Tamu Dishes', 'Get an experience of the Coast in your plate'),
    new Shop ('Purple Hibiscus Hotel', 'Wanna go natural, try our drinks.. Best served cold'),
  ];

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
    // shop.name = shop
    this.shops.push(shop);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
