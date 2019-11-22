import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.getCurrentPosition();
  }

  navTo(input){
    this.router.navigate(['/',input])
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    alert(coordinates.coords.latitude);
    alert(coordinates.coords.longitude);
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
      console.log(position)
    })
  }

}
