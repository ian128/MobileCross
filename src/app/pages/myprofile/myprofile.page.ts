import { Component, OnInit, NgZone } from '@angular/core';
import {faShare, faGlobeAsia, faMapPin, faStopwatch} from '@fortawesome/free-solid-svg-icons'
import { MyProfileService } from 'src/app/services/myProfile/my-profile.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Profile } from 'src/app/models/profile';
import { Sparring } from 'src/app/models/sparring';
import { Court } from 'src/app/models/court';
import { NavController, ToastController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

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
  loadingProfile: Boolean

  userId: any
  profile: Profile

  activeFields: Court[]
  activeEvents: SparringPair[]

  numberOfEvents: any
  profilePicture

  constructor(
    private myProfileSvc: MyProfileService,
    private authSvc: AuthService,
    private ngZone: NgZone,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private router: Router,
    private db: AngularFireDatabase
  ) {
    this.profile={
      id: "",
      email: "",
      first_name: "Fetching...",
      last_name: "",
      password: "",
      phone_number: "",
      photo_profile: "",
    }
  }

  async ngOnInit() {
    this.loadingProfile=true
    this.profilePicture="assets/icon/profile.png"

    this.userId = this.authSvc.getLoggedInUserID()

    this.myProfileSvc.getUserAccount(this.userId).subscribe(
      (response)=>{
        this.loadingProfile=false
        this.profile=response
      }
    )

    var re = this.db.database.ref('/raga/profile/p'+this.userId).on(
      'value',(snapshot)=>{
        if(snapshot.val() != null) this.profilePicture=snapshot.val()
      },
    )

    this.loadingActiveEvents=true
    this.myProfileSvc.getActiveEvents(this.userId).then(
      async (res : Sparring[])=>{
        this.numberOfEvents=res.length
        this.activeEvents =[]
        for(let n=0; n < res.length; n++){
          this.ngZone.runTask(async ()=>{
            this.loadingActiveEvents=true
            this.activeEvents.push({
              sparring: res[n],
              court: await this.myProfileSvc.getACourt(res[n].court_id).toPromise()
            })
            this.loadingActiveEvents=false
          })
        }
        this.loadingActiveEvents=false
      }
    )

    this.ngZone.run(async ()=>{
      this.loadingActiveFields=true
      this.activeFields=await this.myProfileSvc.getActiveFields(this.userId)
      this.loadingActiveFields=false
    })
  }

  editProfile(){
    this.router.navigate(['/','editprofile'],{
      state:{
        profile: this.profile
      }
    })
  }

  ionViewWillEnter(){
    this.ngOnInit()
  }

  logout(){
    if(this.authSvc.logout()){
      this.toastCtrl.create({
        message: "Logout is successful, see you soon!",
        duration: 2000,
        color: "success"
      }).then((res)=>{
        res.present()
      })
      this.navCtrl.navigateRoot(['/','onboarding'])
    }
  }

  about(){
    alert('Raga1.0.0 \n NullPointerException - UMN 2019')
  }

}
