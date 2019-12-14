import { Component, OnInit, Input } from '@angular/core';
import {faShare, faGlobeAsia, faMapPin, faStopwatch} from '@fortawesome/free-solid-svg-icons'
import { Sparring } from 'src/app/models/sparring';
import { Court } from 'src/app/models/court';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-sparring',
  templateUrl: './card-sparring.component.html',
  styleUrls: ['./card-sparring.component.scss'],
})

export class CardSparringComponent implements OnInit {
  share = faShare
  globe = faGlobeAsia
  mapPin = faMapPin
  stopwatch = faStopwatch

  @Input() sparring: Sparring
  @Input() court: Court
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  details(){
    sessionStorage.setItem(
      'sparring-details',JSON.stringify(
        {
          sparring: this.sparring,
          court: this.court
        }
      )
    )
    this.router.navigate(['/','sparring-detail'])
  }
}
