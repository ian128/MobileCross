import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  setLoggedIn(){
    localStorage.setItem('isLoggedIn', 'true')
  }

  isLoggedIn(): Boolean{
    if(localStorage.getItem('isLoggedIn') == 'true') return true;
    else return false;
  }

}
