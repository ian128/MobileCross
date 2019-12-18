import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from 'src/app/models/profile';
import { baseUrl, auth } from '../base';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  constructor(
    private http: HttpClient
  ) { }

  getProfilePicture(){
    return localStorage.getItem('photoprofile')
  }

  setProfilePicture(base64){
    localStorage.setItem('photoprofile',base64)
    return true
  }

  retrieveCurrentProfile(id){
    return this.http.get<Profile>(baseUrl+"/api/account/"+id)
  }

  updateCurrentProfile(userId, body){
    return this.http.put(baseUrl+"/api/account/"+userId,
    body)
  }
}
