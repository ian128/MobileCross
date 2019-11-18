import { Component, OnInit, Input } from '@angular/core';
import {faShare, faGlobeAsia, faMapPin, faStopwatch} from '@fortawesome/free-solid-svg-icons'

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

  @Input() sparringID: String
  @Input() title: String
  @Input() participants: String
  @Input() location: String
  @Input() day: String
  @Input() time: String

  constructor() { }

  ngOnInit() {}

}
