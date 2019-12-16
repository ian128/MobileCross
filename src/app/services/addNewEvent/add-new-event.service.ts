import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../base';
import { Court } from 'src/app/models/court';

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
    return this.http.post(baseUrl+'/api/sparring',
    body,
    {
      headers: this.httpHeader
    })
  }

  getAllCourts(){ 
    return this.http.get<Court[]>(baseUrl+'/api/court')
  }
}
