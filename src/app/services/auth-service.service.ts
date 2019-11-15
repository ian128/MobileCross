import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://192.168.43.20:8000'
  private httpHeaders= {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  }

  constructor(private http: HttpClient) {
  }

  doSignUp():Observable<any>{
    return this.http.post(this.baseUrl+'/api/register', {
      "name": "Ahsanul",
      "email": "ahsanul@gmail.com",
      "password":"ahsanul",
      "c_password":"ahsanul"
    },
    this.httpHeaders
    );
  }
}
