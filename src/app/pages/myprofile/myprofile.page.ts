import { Component, OnInit } from '@angular/core';
import {faShare, faGlobeAsia, faMapPin, faStopwatch} from '@fortawesome/free-solid-svg-icons'
import { MyProfileService } from 'src/app/services/myProfile/my-profile.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {
  share = faShare
  globe = faGlobeAsia
  mapPin = faMapPin
  stopwatch = faStopwatch

  userId: any
  profile: Profile

  constructor(
    private myProfileSvc: MyProfileService,
    private authSvc: AuthService
  ) {
    this.profile={
      id: "Loading...",
      email: "Loading...",
      first_name: "Connecting...",
      last_name: " ",
      password: "Loading...",
      phone_number: "Loading...",
      photo_profile: "Loading...",
    }
  }

  ngOnInit() {
    this.userId = this.authSvc.getLoggedInUserID()
    this.myProfileSvc.getUserAccount(this.userId).subscribe(
      (response)=>{
        this.profile=response
      }
    )
  }

  ionViewWillEnter(){
    this.ngOnInit()
  }

}
