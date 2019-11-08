import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  constructor(
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async editProfile(){
    var z = await this.toastController.create({
      duration: 2000,
      message: "Profile has been edited successfully!"
    });
    z.present();
    this.router.navigateByUrl("/myprofile");
  }
}
