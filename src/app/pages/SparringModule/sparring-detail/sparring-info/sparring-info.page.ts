import { Component, OnInit } from '@angular/core';
import { faUserTimes, faGlobeAsia, faDollarSign, faBuilding,
  faStopwatch,faMapPin, faTag
 } from '@fortawesome/free-solid-svg-icons';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sparring-info',
  templateUrl: './sparring-info.page.html',
  styleUrls: ['./sparring-info.page.scss'],
})
export class SparringInfoPage implements OnInit {
  userTimes = faUserTimes;
  globeAsia = faGlobeAsia;
  dollarSign = faDollarSign;
  building = faBuilding;
  stopwatch = faStopwatch;
  mapPin = faMapPin;
  notes = faTag;

  constructor(
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  async joinGame(){
    var x = await this.toastController.create({
      message: "You have been joined into this game!",
      duration: 2000,
    })
    x.present()
  }
}
