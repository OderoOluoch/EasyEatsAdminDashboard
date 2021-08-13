import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
// import { type } from 'os';
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
    //headers
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type',  'application/json')
    return this.http.get('https://easyeatsodero.herokuapp.com/api/v1/waiters');
  }
  createWaiters(){
    return this.HttpClient.post('https://easyeatsodero.herokuapp.com/api/v1/waiters/new')

  }

  apiCallMenus(){
    return this.http.get('https://easyeatsodero.herokuapp.com/api/v1/menus');
  }

 
 
}



