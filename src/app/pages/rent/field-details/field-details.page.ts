import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Court } from 'src/app/models/court';
import { sports } from 'src/app/services/base';

@Component({
  selector: 'app-field-details',
  templateUrl: './field-details.page.html',
  styleUrls: ['./field-details.page.scss'],
})
export class FieldDetailsPage implements OnInit {
  court: Court 
  selected: string

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
    this.court = this.router.getCurrentNavigation().extras.state.court
    this.selected=sports[this.court.sport_id.toString()]
    if(this.court.photo == null) return
    if(!this.court.photo.includes('http')) this.court.photo = null
  }

}
