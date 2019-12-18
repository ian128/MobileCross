import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../base';
import { Court } from 'src/app/models/court';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCourts(){
    return this.http.get<Court[]>(baseUrl+'/api/court')
  }
}
