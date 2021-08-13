import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  HttpClient: any;

  constructor(private http: HttpClient) { }
  

 
  apiCallShops(){
    return this.http.get('https://easyeatsodero.herokuapp.com/api/v1/shops');
  }

  
  apiCallwaiters(){
    return this.http.get('https://easyeatsodero.herokuapp.com/api/v1/waiters');
  }

  apiCallMenus(){
    return this.http.get('https://easyeatsodero.herokuapp.com/api/v1/menus');
  }

  addWaiter(createResourse){
    return this.HttpClient.post('https://easyeatsodero.herokuapp.com/api/v1/waiters/new', createResourse )
  }
 
}



