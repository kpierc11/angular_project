import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable(
  {providedIn: "root"}
)
export class ConfigService {

  constructor(private http: HttpClient) { }

  getUser(apiEndPoint:string){
     return this.http.get(apiEndPoint);
  }
  getProducts(apiEndPoint:string) {
    return this.http.get(apiEndPoint);
  }

}