import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable(
  {providedIn: "root"}
)
export class ConfigService {

  apiEndPoint = 'http://localhost:8080/api/user';
  constructor(private http: HttpClient) { }

  getUser(){
     return this.http.get(this.apiEndPoint);
  }

}