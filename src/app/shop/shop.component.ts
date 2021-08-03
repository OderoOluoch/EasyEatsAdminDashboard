import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shops : Shop[] = [
    {id: 1, name: 'La Ratatulie', description: 'For the best Italian cuisines'},
    {id: 2, name: 'Mama Nyama', description: 'Need your chomas hot, we got you covered.'},
    {id: 3, name: 'Americana Hotel', description: 'Nothing Tastes better than American Burgers..'},
    {id: 4, name: 'Tamu Tamu Dishes', description: 'Get an experience of the Coast in your plate'},
    {id: 5, name: 'Purple Hibiscus Hotel', description: 'Wanna go natural, try our drinks.. Best served cold'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
