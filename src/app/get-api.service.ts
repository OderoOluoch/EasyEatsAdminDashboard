import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http: HttpClient
  ) { }
  // tslint:disable-next-line:typedef
  apiCall(){
    return this.http.get('https://easyeatsodero.herokuapp.com/api/v1/shops');
  }

  // tslint:disable-next-line:typedef
  apiCallwaiters(){
    return this.http.get('https://easyeatsodero.herokuapp.com/api/v1/waiters');
  }
  // tslint:disable-next-line:typedef
  apiCallmenu(){
    return this.http.get('https://easyeatsodero.herokuapp.com/api/v1/menus/new');
  }
}

