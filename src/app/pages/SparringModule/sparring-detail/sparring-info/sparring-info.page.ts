import { Component, OnInit, NgZone } from '@angular/core';
import { faUserTimes, faGlobeAsia, faDollarSign, faBuilding,
  faStopwatch,faMapPin, faTag
 } from '@fortawesome/free-solid-svg-icons';
import { Court } from 'src/app/models/court';
import { Sparring } from 'src/app/models/sparring';
import { SparringService } from 'src/app/services/sparring/sparring.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { sportDetails } from 'src/app/services/base';

import { Plugins } from '@capacitor/core';
import { MapsAPILoader } from '@agm/core';

declare var google: any

const { Geolocation } = Plugins;

type Coordiantes={
  lat: any,
  lng: any
}

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

  private geoCoder;
  
  isLoading: boolean

  peopleNeeded: any
  distance: any

  public date: Date

  origin: Coordiantes
  destination: Coordiantes
  
  constructor(
    private sparringSvc: SparringService,
    private authSvc: AuthService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
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
    
    this.sparringSvc.getParticipants(this.sparring.id).then(
      (res)=>{
        this.peopleNeeded=sportDetails[this.sparring.sport_id].max_participant-res.length
      }
    )

    this.isLoading = false
    await this.getRoute();
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

  async getRoute() {
    console.log("getting current position!")
    const coordinates = await Geolocation.getCurrentPosition();
    this.origin = { lat: parseFloat(coordinates.coords.latitude.toString()), lng: parseFloat(coordinates.coords.longitude.toString()) };
    this.getDestination()
  }
  
  getDestination(){
   this.ngZone.run(()=>{
      this.mapsAPILoader.load().then(() => {   
        this.geoCoder = new google.maps.Geocoder;
          this.geoCoder.geocode({ 'address': this.court.name+' '+this.court.location }, (results, status) => {
            if (status === 'OK') {
              if (results[0]) {
                var res=results[0]
                this.destination={
                  lat: parseFloat(res.geometry.location.lat()),
                  lng: parseFloat(res.geometry.location.lng())
                }
                console.log(this.origin)
                console.log(this.destination)

                let or = new google.maps.LatLng(this.origin.lat, this.origin.lng)
                let des =  new google.maps.LatLng(this.destination.lat, this.destination.lng)
                
                this.distance=google.maps.geometry.spherical.computeDistanceBetween(or, des)/1000
                this.distance=Number(this.distance.toFixed(2))

              } else {
                window.alert('No results found');
              }
            } else {
              window.alert('Geocoder failed due to: ' + status)
            }
          })

      });
    })
  }
}
