import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navTo(input){
    this.router.navigate(['/',input])
  }

  fieldDetails(){
    this.router.navigate(['/','field-details'])
  }

  newsDetail(){
    this.router.navigate(['/','news-detail'])
  }
}
