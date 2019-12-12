import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../base';
import { Sparring } from 'src/app/models/sparring';
import { Court } from 'src/app/models/court';

@Injectable({
  providedIn: 'root'
})
export class SparringService {
  constructor(
    private http: HttpClient
  ) { }

  getAllSparring(){
    return this.http.get<Sparring[]>(
      baseUrl+'/api/sparring',
    )
  }

  getCourt(id: any){
    return this.http.get<Court>(
      baseUrl+'/api/court/'+id
    )
  }
}
