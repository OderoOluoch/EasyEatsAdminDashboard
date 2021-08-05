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
}
