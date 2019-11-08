import { Component, OnInit } from '@angular/core';
import { faDirections } from '@fortawesome/free-solid-svg-icons'
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-addnewfield',
  templateUrl: './addnewfield.page.html',
  styleUrls: ['./addnewfield.page.scss'],
})
export class AddnewfieldPage implements OnInit {
  direction = faDirections;
  constructor(
    private router:Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  async addField(){
    var z = await this.toastController.create({
      duration: 2000,
      message: "New field has been added successfully!"
    });
    z.present();
    this.router.navigateByUrl("/myprofile");
  }
}
