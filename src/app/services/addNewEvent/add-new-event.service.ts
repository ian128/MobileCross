import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddNewEventService {

  httpHeader = new HttpHeaders({
    'Content-Type':'application/json'
  })
  constructor(
    private http: HttpClient
  ) { }

  connectToApi(body){
    return this.http.post('https://metal-coil-259515.appspot.com/api/sparring',
    body,
    {
      headers: this.httpHeader
    })
  }
}
