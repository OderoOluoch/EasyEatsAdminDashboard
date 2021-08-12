import { Component } from '@angular/core';
import { from } from 'rxjs';
import { MenuComponent } from './menu/menu.component';
import { WaitersComponent } from './waiters/waiters.component';

import {GetApiService} from './get-api.service';

// import { Shop } from './shop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   Api: any [] = [];
  GetApiService: any;
  title: any;
  constructor(private api: GetApiService){
  }

ngOnInit(){
  this.api.apiCall().subscribe((data) => {
    console.log('get api data', data);
    // tslint:disable-next-line:no-string-literal
    // this.title = data['title'];
  });

  this.api.apiCallwaiters().subscribe((data) => {
    console.log('get api data', data);
    // tslint:disable-next-line:no-string-literal
    // this.title = data['title'];
  });
}
}



