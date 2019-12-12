import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/app/models/profile';
import { baseUrl } from '../base';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  constructor(
    private http: HttpClient
  ) { }

  getUserAccount(id){
    return this.http.get<Profile>(baseUrl+"/api/account/"+id)
  }

  getProfilePicture(){
    return localStorage.getItem('photoprofile')
  }

}
