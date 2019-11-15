import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
    this.authSvc.doSignUp().subscribe((f)=>{
      console.log(f);
    })
  }

}
