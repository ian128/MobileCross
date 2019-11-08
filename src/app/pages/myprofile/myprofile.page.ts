import { Component, OnInit } from '@angular/core';
import {faShare, faGlobeAsia, faMapPin, faStopwatch} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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

  constructor(
    private router: Router,
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

  fieldDetails(){
    this.router.navigateByUrl('/field-details')
  }
}
