import { Component, Input, OnInit } from '@angular/core';
import { Shop } from '../shop';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {
  
  @Input () shop : Shop;

  constructor() { }

  ngOnInit(): void {
  }

}
