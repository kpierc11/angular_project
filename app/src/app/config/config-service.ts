import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import { IProduct } from 'src/interfaces/product.interface';

@Injectable(
  { providedIn: "root" }
)
export class ConfigService {

  constructor(private http: HttpClient) { }

  getUser(apiEndPoint: string) {
    return this.http.get(apiEndPoint);
  }
  getProducts(apiEndPoint: string): Observable<IProduct[]> {

    return this.http.get<IProduct[]>(apiEndPoint);
  }

  sendLoginInfo(){
    return this.http.post(apiEndPoint,)
  }

}