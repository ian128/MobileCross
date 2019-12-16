import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Court } from 'src/app/models/court';

@Component({
  selector: 'app-card-field-short',
  templateUrl: './card-field-short.component.html',
  styleUrls: ['./card-field-short.component.scss'],
})
export class CardFieldShortComponent implements OnInit {
  @Input() court: Court
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(this.court == null){
      this.court={
        photo: null,
        name: "placeholder",
        email: "y",
        id:1,
        phone_number:"3983",
        sport_id:3,
        location: "yeah",
        user_id:1,
        weekday_price:3094,
        weekend_price:289
      }
    }else{
      if(this.court.photo == null) return
      if(!this.court.photo.includes('http')) this.court.photo = null
    }
  }

  fieldDetails(){
    this.router.navigate(['/','field-details'],{
      state: {
        court: this.court
      }
    })
  }
}
