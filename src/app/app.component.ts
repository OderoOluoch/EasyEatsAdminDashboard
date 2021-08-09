import { Component } from '@angular/core';
import { from } from 'rxjs';
import { MenuComponent } from './menu/menu.component';
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
  constructor(private api: GetApiService){
  }


}


