import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { Plugins } from '@capacitor/core';
import { Court } from 'src/app/models/court';
import { HomeService } from 'src/app/services/home/home.service';
import { MapsAPILoader } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
const { Geolocation } = Plugins;

type Coordiantes={
  lat: any,
  lng: any
}

declare var google: any

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  nearbyCourts: Court[]
  measurements: {}
  
  origin: Coordiantes
  newsList:any[]=[]

  loadingNearbyField: Boolean
  loadingNews: Boolean

  public nearbyFieldsPicture={}

  placeholder = "assets/images/placeholder/generic.jpg"
  
  private geoCoder
  constructor(
    private router: Router,
    private homeSvc: HomeService,
    private mapsAPILoader: MapsAPILoader,
    private http: HttpClient,
    private route: Router,
    private db: AngularFireDatabase
  ) { }

  async ngOnInit(event?) {
    this.loadingNearbyField = true
    this.loadingNews = true

    this.nearbyCourts = await this.homeSvc.getAllCourts().toPromise()
    await this.getOrigin()
    
    this.measurements={}

    //calculate distance for the first time
    this.nearbyCourts.forEach((item)=>{
      this.getDestination(item)
    })

    setInterval(()=>{
      if(this.measurements == {}) return 
      this.nearbyCourts = this.nearbyCourts.filter((item)=>{
        if(this.measurements[item.id] == undefined) return true;
        else return (this.measurements[item.id] < 4.0)
      })

      this.nearbyCourts.forEach((res)=>{
        this.db.database.ref('/raga/court/c'+res.id).once('value').then((val)=>{
          this.nearbyFieldsPicture[res.id] = val.val() == null ? this.placeholder : val.val()
        })
      })
    }, 5000)

    this.loadingNearbyField = false

    this.getNewsList()

    event != null ? event.target.complete() : null
  }

  async getOrigin() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.origin = { lat: parseFloat(coordinates.coords.latitude.toString()), lng: parseFloat(coordinates.coords.longitude.toString()) };
  }

  navTo(input){
    this.router.navigate(['/',input])
  }

  async getDestination(court: Court){
    await this.mapsAPILoader.load()
    this.geoCoder = new google.maps.Geocoder;
    await this.geoCoder.geocode({ 'address': court.name+' '+court.location }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          let res=results[0]
          let destination: Coordiantes={
            lat: parseFloat(res.geometry.location.lat()),
            lng: parseFloat(res.geometry.location.lng())
          }

          let or = new google.maps.LatLng(this.origin.lat, this.origin.lng)
          let des =  new google.maps.LatLng(destination.lat, destination.lng)
          
          let distance=google.maps.geometry.spherical.computeDistanceBetween(or, des)/1000
          distance=Number(distance.toFixed(2))
          this.measurements[court.id]=distance
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status)
      }
    })
  }

  getNewsList(){
    this.http.get('https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=b1374a9fb80a49fe87b4ca8794577a56').subscribe(data=>{
      this.newsList=data["articles"]
      this.loadingNews=false
    })
  }

  openNewsDetails(s){
    this.route.navigate(['/','news-detail'], { queryParams: { link: s } })
  }

  fieldDetails(court: Court){
    this.router.navigate(['/','field-details'],{
      state: {
        court: court
      }
    })
  }
}
