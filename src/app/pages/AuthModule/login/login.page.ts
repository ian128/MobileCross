import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authSvc: AuthService
  ) { }

  ngOnInit() {
    this.authSvc.login().subscribe(
      (res)=>{
        console.log(res)
      }
    )
  }

}
