import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import { baseUrl } from '../base';
import { toUnicode } from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  kHttpHeaders: HttpHeaders=new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(
    private http: HttpClient
  ) {}

  login(){
    return this.http.get(
      baseUrl+'/api/account'
    )
  }

  setLoggedIn(userID: String){
    localStorage.setItem('raga', JSON.stringify({
      'loggedIn': true,
      'userID': userID
    }))
  }

  isLoggedIn(): Boolean{
    var z = JSON.parse(
      localStorage.getItem('raga')
    )
    if(z != null) return true;
    else return false;
  }

  getLoggedInUserID(){
    var z = JSON.parse(
      localStorage.getItem('raga')
    )
    if(z == null) return null;
    else return z.userID;
  }

  makeNewAccount(data: any){
    return this.http.post(baseUrl+'/api/account',
     data,
     {
       headers: this.kHttpHeaders,
     },
    )
  }

  logout(){
    localStorage.removeItem('raga')
    return true;
  }

}
