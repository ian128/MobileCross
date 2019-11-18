import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent-field',
  templateUrl: './rent-field.page.html',
  styleUrls: ['./rent-field.page.scss'],
})
export class RentFieldPage implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

  popularFieldSelection(e){
    console.log(e)
  }
  nearbyFieldsSelection(e){
    console.log(e)
  }
}
