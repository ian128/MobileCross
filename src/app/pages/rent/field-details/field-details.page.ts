import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Court } from 'src/app/models/court';
import { sports } from 'src/app/services/base';
import { Plugins } from '@capacitor/core';
import { MapsAPILoader } from '@agm/core';
import { AngularFireDatabase } from '@angular/fire/database';

declare var google: any

const { Geolocation } = Plugins;

type Coordiantes={
  lat: any,
  lng: any
}

@Component({
  selector: 'app-field-details',
  templateUrl: './field-details.page.html',
  styleUrls: ['./field-details.page.scss'],
})
export class FieldDetailsPage implements OnInit {
  court: Court 
  selected: string
  origin: Coordiantes
  destination: Coordiantes
  distance: any

  private geoCoder;
  photo

  constructor(
    private router : Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.photo = 'assets/images/placeholder/generic.jpg'
    this.court = this.router.getCurrentNavigation().extras.state.court
    this.selected=sports[this.court.sport_id.toString()]
    this.getRoute()
    this.db.database.ref('/raga/court/c'+this.court.id).once('value').then(
      (res)=> this.photo= res.val() == null ? 'assets/images/placeholder/generic.jpg' : res.val()
    )
  }

  async getRoute(event?) {
    console.log("getting current position!")
    const coordinates = await Geolocation.getCurrentPosition();
    this.origin = { lat: parseFloat(coordinates.coords.latitude.toString()), lng: parseFloat(coordinates.coords.longitude.toString()) };

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
      event != null ? event.target.complete() : null
  }

}
