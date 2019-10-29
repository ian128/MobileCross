import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent-field',
  templateUrl: './rent-field.page.html',
  styleUrls: ['./rent-field.page.scss'],
})
export class RentFieldPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log(ev.detail.value);
  }

  fieldDetails(){
    this.router.navigate(['/','field-details'])
  }
}
