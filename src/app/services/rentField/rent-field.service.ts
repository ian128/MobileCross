import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../base';
import { Court } from 'src/app/models/court';

@Injectable({
  providedIn: 'root'
})
export class RentFieldService {

  constructor(
    private http: HttpClient,
  ) { 

  }

  getAllCourt(){
    return this.http.get<Court[]>(baseUrl+'/api/court')
  }
}
