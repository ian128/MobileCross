import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Court } from 'src/app/models/court';
import { RentFieldService } from 'src/app/services/rentField/rent-field.service';
import { sports } from 'src/app/services/base';

@Component({
  selector: 'app-rent-field',
  templateUrl: './rent-field.page.html',
  styleUrls: ['./rent-field.page.scss'],
})
export class RentFieldPage implements OnInit {
  
  private allFields: Court[]

  selectedPopularFields: Court[] =[]
  selectedNearbyFields: Court[]=[]

  loading: Boolean
  
  constructor(
    private rentFieldSvc: RentFieldService
  ) { }

  async ngOnInit() {
    this.loading=true
    this.allFields = await this.rentFieldSvc.getAllCourt().toPromise()
    console.log(this.allFields)
    this.popularFieldSelection(sports[1])
    this.loading=false
  }

  popularFieldSelection(e){
    console.log(sports[e])
    console.log(e)
    if(this.allFields == null) return
    this.selectedPopularFields = this.allFields.filter(
      (item) => item.sport_id == sports[e]
    )
    console.log(this.selectedPopularFields)
  }
}
