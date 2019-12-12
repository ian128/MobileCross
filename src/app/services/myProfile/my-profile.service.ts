import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/app/models/profile';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  constructor(
    private http: HttpClient
  ) { }

  getUserAccount(id){
    return this.http.get<Profile>("https://metal-coil-259515.appspot.com/api/account/"+id)
  }
}
