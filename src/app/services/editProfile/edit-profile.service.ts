import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/app/models/profile';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveCurrentProfile(id){
    return this.http.get<Profile>("https://metal-coil-259515.appspot.com/api/account/"+id)
  }

  updateCurrentProfile(id, body){
    return this.http.put("https://metal-coil-259515.appspot.com/api/account/"+id,
    body)
  }
}
