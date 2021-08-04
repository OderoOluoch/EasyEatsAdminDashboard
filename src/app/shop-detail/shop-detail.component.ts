import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Shop } from '../shop';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {
  
  @Input () shop : Shop;
  @Output () isComplete = new EventEmitter<boolean>()

  shopDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
