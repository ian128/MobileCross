import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(
    private router: Router,
    private authSvc: AuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    setTimeout(()=>{
      if(this.authSvc.isLoggedIn){
        this.navCtrl.navigateRoot(['/','home'])
      }
      else this.navCtrl.navigateRoot(['/','onboarding'])
    },3000)
  }

}
