import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sparring-list',
  templateUrl: './sparring-list.page.html',
  styleUrls: ['./sparring-list.page.scss'],
})
export class SparringListPage implements OnInit {

  constructor(
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }


  segmentChanged(ev: any) {
    console.log(ev.detail.value);
  }
  
  async joinGame(){
    var x = await this.toastController.create({
      message: "You have been joined into this game!",
      duration: 2000,
    })
    x.present()
  }

}
