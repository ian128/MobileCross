import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../base';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

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

}
