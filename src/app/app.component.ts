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
  title = 'Call Api';
  constructor(private api: GetApiService){
  }

// tslint:disable-next-line:use-lifecycle-interface
ngOnInit(): void{
  this.api.apiCall().subscribe((data) => {
    console.log('get api data', data);

  });
}
}


// tslint:disable-next-line:typedef
// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }
// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }

