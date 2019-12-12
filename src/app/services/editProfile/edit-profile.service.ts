import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/app/models/profile';
import { baseUrl } from '../base';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveCurrentProfile(id){
    return this.http.get<Profile>(baseUrl+"/api/account/"+id)
  }

  updateCurrentProfile(id, body){
    return this.http.put(baseUrl+"/api/account/"+id,
    body)
  }
}
