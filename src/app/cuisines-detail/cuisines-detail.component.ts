import { Component, Input, OnInit } from '@angular/core';
import { Cuisine } from '../models/cuisine';
@Component({
  selector: 'app-cuisines-detail',
  templateUrl: './cuisines-detail.component.html',
  styleUrls: ['./cuisines-detail.component.css']
})
export class CuisinesDetailComponent implements OnInit {
  @Input()cuisines: Cuisine;

  constructor() { }

  ngOnInit(): void {
  }

}
