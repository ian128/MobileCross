import { Component, OnInit, NgZone } from '@angular/core';
import {faShare, faGlobeAsia, faMapPin, faStopwatch} from '@fortawesome/free-solid-svg-icons'
import { MyProfileService } from 'src/app/services/myProfile/my-profile.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Profile } from 'src/app/models/profile';
import { Sparring } from 'src/app/models/sparring';
import { Court } from 'src/app/models/court';

type SparringPair={
  sparring: Sparring,
  court: Court
}

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

  loadingActiveEvents: Boolean
  loadingActiveFields: Boolean

  userId: any
  profile: Profile

  profilePicture: any

  activeFields: Court[]
  activeEvents: SparringPair[]

  constructor(
    private myProfileSvc: MyProfileService,
    private authSvc: AuthService,
    private ngZone: NgZone,
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

  async ngOnInit() {
    this.userId = this.authSvc.getLoggedInUserID()

    this.myProfileSvc.getUserAccount(this.userId).subscribe(
      (response)=>{
        this.profile=response
      }
    )

    this.profilePicture=this.myProfileSvc.getProfilePicture()

    this.ngZone.run(async ()=>{
      this.loadingActiveEvents=true
      let event: Sparring[] = await this.myProfileSvc.getActiveEvents(this.userId)

      for(let n=0; n < event.length; n++){
        if(this.activeEvents == null) this.activeEvents=[]
        this.activeEvents.push({
          sparring: event[n],
          court: await this.myProfileSvc.getACourt(event[n].court_id).toPromise()
        })
        console.log(this.activeEvents.length)
      }
      this.loadingActiveEvents=false
    })

    this.ngZone.run(async ()=>{
      this.loadingActiveFields=true
      this.activeFields=await this.myProfileSvc.getActiveFields(this.userId)
      this.loadingActiveFields=false
    })
  }

  ionViewWillEnter(){
    this.ngOnInit()
  }

}
