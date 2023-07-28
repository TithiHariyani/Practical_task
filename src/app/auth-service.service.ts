import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  domain: string | undefined;
  // HttpClient: any;
  // form: any;
  // router: any;

  constructor(private http:HttpClient) { }

  httpOptionsPost = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
    })
  };

  httpOptionsGet = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  };

  // login(data: any): Observable<any>{
  //   console.log("Sucsess");
  //   return this.http.post(`http://test.ultim8e.net/api/auth/login`, data);
  // }

  login(username: string, password: string | undefined) {
    const url = this.domain + 'http://test.ultim8e.net/api/auth/login='+username+'&password='+password;
    return this.http.post(url, {}, this.httpOptionsPost);
  }

  onLogin(obj: any) : Observable<any>{
    return this.http.post('http://test.ultim8e.net/api/auth/login', obj);
  }

  getClients() : Observable<any> {
    return this.http.get('http://test.ultim8e.net/api/clients');
  }

  // constructor(private http: HttpClient) {}

  // login(username: string, password: string){
  // this.HttpClient.login(this.form.get('username')?.value, this.form.get('password')?.value)
  // .subscribe((response: any) => {
  //   console.log(response);
  //   this.router.navigate(['/client.list']);
  // });
  // }
}
