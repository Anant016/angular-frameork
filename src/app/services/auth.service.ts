import { Injectable } from '@angular/core';
import{Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {tokenNotExpired} from 'angular2-jwt';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authtoken:any;
  user:any;

  constructor(private http:Http) { }

  registerUser(user){
    let headers=new Headers();

    headers.append('Content-Type','application/json');

    return this.http.post('users/register',user, {headers:headers})
      .map(res=>res.json());
  }

  authenticateUser(user){
    let headers=new Headers();

    headers.append('Content-Type','application/json');

    return this.http.post('users/authenticate',user, {headers:headers})
      .map(res=>res.json());
  }

  getProfile(){
    let headers=new Headers();

    const token=localStorage.getItem('id_token');
    this.authtoken=token;

    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authtoken);

    return this.http.get('users/pro', {headers:headers})//http://localhost:8080/
      .map(res=>res.json());
  }

  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authtoken=token;
    this.user=user;
  }
  loggedIn(){
      return localStorage.getItem('id_token');
     }

  logout(){
    this.authtoken=null;
    this.user=null;
    localStorage.clear();

  }
}
