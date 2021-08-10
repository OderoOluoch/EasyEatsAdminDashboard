import { Component, OnInit } from '@angular/core';
import {GetApiService} from '../get-api.service'

@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.component.html',
  styleUrls: ['./waiters.component.css']
})
export class WaitersComponent implements OnInit {

  constructor(public getApiService: GetApiService) { }

  waiterList: any;
  ngOnInit(): void {
    this.waiterList = this.getApiService.apiCallwaiters().subscribe(data => {
      this.waiterList = data;

    });
  }

}
