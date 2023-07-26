import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  login(data: any): Observable<any>{
    return this.http.post(`http://test.ultim8e.net/api/auth/login`, data);
  }
}
