import { Component, OnInit } from '@angular/core';
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-addnewevent',
  templateUrl: './addnewevent.page.html',
  styleUrls: ['./addnewevent.page.scss'],
})
export class AddneweventPage implements OnInit {
  direction = faDirections;
  constructor(
    private router:Router,
    private toastController: ToastController
  ) { }
  
  ngOnInit() {
  }
  
  async addEvent(){
    var z = await this.toastController.create({
      duration: 2000,
      message: "New event has been added successfully!"
    });
    z.present();
    this.router.navigateByUrl("/myprofile");
  }
}
