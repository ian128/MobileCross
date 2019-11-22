import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

var md5 = require('md5');

import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: String
  password: String
  isProcessing: Boolean

  constructor(
    private authSvc: AuthService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.isProcessing=false;
  }

  async auth(){
    if(this.email == null){
      var err = await this.toastController.create(
        {
          message: "Email is still empty",
          duration: 2000,
          color: "danger"
        }
      )
      err.present() 
      return;
    }

    if(this.password == null){
      var err = await this.toastController.create(
        {
          message: "Password is still empty",
          duration: 2000,
          color: "danger"
        }
      )
      err.present() 
      return;
    }

    this.isProcessing=true
    this.authSvc.login().subscribe(
      async (res: any)=>{
        this.isProcessing=false

        var found = false;
        res.forEach((f)=>{
          if(f.email == this.email && f.password == md5(this.password)){
            found = true
          }
        })
        if(found){
          this.authSvc.setLoggedIn();
          this.router.navigate(['/','home'])
          return;
        }else{
          var err = await this.toastController.create(
            {
              message: "Account Not Found",
              duration: 2000,
              color: "danger"
            }
          )
          err.present() 
        }
      }
    )
  }

}
