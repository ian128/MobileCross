import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  step=0;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  proceed(){
    if(this.step == 2) this.router.navigateByUrl('/login')
    this.step += 1;
  }

}
