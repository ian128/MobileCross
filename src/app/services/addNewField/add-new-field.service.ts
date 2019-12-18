import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../base';
import { Court } from 'src/app/models/court';

@Injectable({
  providedIn: 'root'
})
export class AddNewFieldService {

  constructor(
    private http: HttpClient
  ) { }

  addNewField(body){
    return this.http.post<Court>(baseUrl+'/api/court',body,{
       headers:{
         'Content-Type': 'application/json'
       }
    })
  }
}
