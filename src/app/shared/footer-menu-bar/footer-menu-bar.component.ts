import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-menu-bar',
  templateUrl: './footer-menu-bar.component.html',
  styleUrls: ['./footer-menu-bar.component.scss'],
})
export class FooterMenuBarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}
  
  route(link){
    console.log(link)
    this.router.navigate(['/',link])
  }
}
