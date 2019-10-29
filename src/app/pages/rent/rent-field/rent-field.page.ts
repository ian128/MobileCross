import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-field',
  templateUrl: './rent-field.page.html',
  styleUrls: ['./rent-field.page.scss'],
})
export class RentFieldPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log(ev.detail.value);
  }

}
