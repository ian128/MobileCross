import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Court } from 'src/app/models/court';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-card-field-short',
  templateUrl: './card-field-short.component.html',
  styleUrls: ['./card-field-short.component.scss'],
})
export class CardFieldShortComponent implements OnInit {
  @Input() court: Court
  
  constructor(
    private router: Router,
    private db: AngularFireDatabase
  ) { }

  photo

  ngOnInit() {
    this.photo='assets/images/placeholder/generic.jpg'
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
    }
    this.db.database.ref('/raga/court/c'+this.court.id).once('value').then(
      (res)=> this.photo= res.val() == null ? 'assets/images/placeholder/generic.jpg' : res.val()
    )
  }

  fieldDetails(){
    this.router.navigate(['/','field-details'],{
      state: {
        court: this.court
      }
    })
  }
}
