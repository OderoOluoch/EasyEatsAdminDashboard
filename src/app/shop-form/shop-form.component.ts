import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Shop } from '../shop';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css']
})
export class ShopFormComponent implements OnInit {

  newShop = new Shop (0, '', '');
  @Output() addShop = new EventEmitter<Shop>();

  submitShop(){
    this.addShop.emit(this.newShop);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
