import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/app/models/profile';
import { baseUrl } from '../base';
import { ReplaySubject } from 'rxjs';
import { Court } from 'src/app/models/court';
import { Sparring } from 'src/app/models/sparring';

type SparringPair={
  sparring: Sparring,
  court: Court
}

@Injectable({
  providedIn: 'root'
})

export class MyProfileService {
  public activeFieldsSubject:ReplaySubject<Court[]> = new ReplaySubject(1);
  public activeEventsSubject:ReplaySubject<SparringPair[]> = new ReplaySubject(1);

  constructor(
    private http: HttpClient
  ) { }

  getUserAccount(userID){
    return this.http.get<Profile>(baseUrl+"/api/account/"+userID)
  }

  getProfilePicture(){
    return localStorage.getItem('photoprofile')
  }

  async getActiveFields(userID){
    let x: Court[] = await this.http.get<Court[]>(baseUrl+"/api/court").toPromise()
    return x.filter(
      (item)=> item.user_id == userID
    )
  }

  async getActiveEvents(userID){
    let x: Sparring[] = await this.http.get<Sparring[]>(baseUrl+"/api/sparring").toPromise()
    return x.filter(
      (item)=> item.user_id == userID
    )
  }

  getACourt(id: any){
    return this.http.get<Court>(
      baseUrl+'/api/court/'+id
    )
  }

}
