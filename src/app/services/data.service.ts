import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Menu } from '../models/menu';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly BASE_URL = 'https://easyeatsodero.herokuapp.com';
  HttpClient: any;

  constructor(private http: HttpClient) {}

  createMenuItem(name: string, description: string, shop_id: number) {
    const body: Menu = {
      name: name,
      description: description,
      shop_id: shop_id,
    };
    return this.http.post(this.BASE_URL + '/api/v1/menus/new', body).subscribe(
      (res: any) => {
        console.log('Response from post request ' + res);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  apiCallShops() {
    return this.http.get('https://easyeatsodero.herokuapp.com/api/v1/shops');
  }

  apiCallwaiters() {
    return this.http.get('https://easyeatsodero.herokuapp.com/api/v1/waiters');
  }

  apiCallMenus() {
    return this.http.get('https://easyeatsodero.herokuapp.com/api/v1/menus');
  }

  addWaiter(createResourse) {
    return this.HttpClient.post(
      'https://easyeatsodero.herokuapp.com/api/v1/waiters/new',
      createResourse
    );
  }
}
