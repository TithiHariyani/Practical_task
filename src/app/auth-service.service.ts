import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  // HttpClient: any;
  // form: any;
  // router: any;

  constructor(private http:HttpClient) { }
  login(data: any): Observable<any>{
    console.log("Sucsess");
    return this.http.post(`http://test.ultim8e.net/api/auth/login`, data);
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
