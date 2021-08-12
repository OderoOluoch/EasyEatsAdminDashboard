import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  HttpClient: any;

  constructor(private http: HttpClient) { }

 
  // tslint:disable-next-line:ban-types
  // menu: String;
  // apiCallmenu() {
  //   throw new Error('Method not implemented.');
  // }

  // tslint:disable-next-line:typedef
  apiCall(){
    return this.http.get('https://easyeatsodero.herokuapp.com/api/v1/shops');
  }

  // tslint:disable-next-line:typedef
  apiCallwaiters(){
    return this.http.get('https://easyeatsodero.herokuapp.com/api/v1/waiters');
  }

  apiCallMenus(){
    return this.http.get('https://easyeatsodero.herokuapp.com/api/v1/menus');
  }

  addWaiter(createResourse){
    return this.HttpClient.post('https://easyeatsodero.herokuapp.com/api/v1/waiters/new', createResourse )
  }
  // tslint:disable-next-line:typedef
}



