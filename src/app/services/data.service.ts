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
       
      },
      (err: HttpErrorResponse) => {
       
      }
    );
  }

  apiCallCuisines() {
    return this.http.get(this.BASE_URL +'/api/v1/cuisines');
  }


  apiCallShops() {
    return this.http.get(this.BASE_URL +'/api/v1/shops');
  }

  apiCallwaiters() {
    return this.http.get(this.BASE_URL + '/api/v1/waiters');
  }

  apiCallMenus() {
    return this.http.get( this.BASE_URL +'/api/v1/menus');
  }

  addCuisine(form:any){
      console.log("Consoling from service place "+form);
      return this.http.post(this.BASE_URL + '/api/v1/cuisines/new', form).subscribe(
        (res: any) => {
         console.log("New Cuisine response "+res)
        },
        (err: HttpErrorResponse) => {
         console.log("New Cuisine Error " +err.message)
        }
      );
  }



  addShopOutlet(form:any){
    console.log("Consoling from service place "+form);
    return this.http.post(this.BASE_URL + '/api/v1/shops/new', form).subscribe(
      (res: any) => {
       console.log("New Cuisine response "+res)
      },
      (err: HttpErrorResponse) => {
       console.log("New Cuisine Error " +err.message)
      }
    );
}

  addWaiter(createResourse) {
    return this.HttpClient.post(
      this.BASE_URL +'/api/v1/waiters/new',
      createResourse
    );
  }
}
