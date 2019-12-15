import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Court } from 'src/app/models/court';

@Component({
  selector: 'app-rent-field',
  templateUrl: './rent-field.page.html',
  styleUrls: ['./rent-field.page.scss'],
})
export class RentFieldPage implements OnInit {
  
  selectedPopularFields: Court[]
  selectedNearbyFields: Court[]
  
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
