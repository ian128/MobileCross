import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, NavController } from '@ionic/angular';

import { AddEventSuccessPage } from './add-event-success.page';

const routes: Routes = [
  {
    path: '',
    component: AddEventSuccessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddEventSuccessPage]
})
export class AddEventSuccessPageModule implements OnInit{
  constructor(
    public navCtrl: NavController
  ){}

  ngOnInit(){
    setTimeout(this.timeOut,3000)
  }

  timeOut(){
    console.log("Balek")
    this.navCtrl.back()
    this.navCtrl.back()
  }

}
