import { Component, OnInit } from '@angular/core';
import { faUserTimes, faGlobeAsia, faDollarSign, faBuilding,
  faStopwatch,faMapPin, faTag
 } from '@fortawesome/free-solid-svg-icons';
import { Court } from 'src/app/models/court';
import { Sparring } from 'src/app/models/sparring';
import { SparringService } from 'src/app/services/sparring/sparring.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sparring-info',
  templateUrl: './sparring-info.page.html',
  styleUrls: ['./sparring-info.page.scss'],
})
export class SparringInfoPage implements OnInit {

  court: Court
  sparring: Sparring

  isJoined: Boolean
  
  userTimes = faUserTimes;
  globeAsia = faGlobeAsia;
  dollarSign = faDollarSign;
  building = faBuilding;
  stopwatch = faStopwatch;
  mapPin = faMapPin;
  notes = faTag;

  private date: Date

  isLoading: boolean

  constructor(
    private sparringSvc: SparringService,
    private authSvc: AuthService
  ) { }

  async ngOnInit() {
    this.isLoading = true

    var res = JSON.parse(sessionStorage.getItem('sparring-details'))
    this.court = res.court
    this.sparring = res.sparring
    
    this.date = new Date(this.sparring.date)

    this.isJoined = await this.sparringSvc.isJoined(
      this.authSvc.getLoggedInUserID(),
      this.sparring.id)

    this.isLoading = false
  }

  async join(){
    this.isLoading=true
    if(await this.sparringSvc.join(
      this.authSvc.getLoggedInUserID(),
      this.sparring.id
    )){
      this.isJoined = true
    }
    this.isLoading=false
  }

}
