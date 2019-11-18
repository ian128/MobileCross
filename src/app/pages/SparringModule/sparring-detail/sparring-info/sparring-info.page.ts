import { Component, OnInit } from '@angular/core';
import { faUserTimes, faGlobeAsia, faDollarSign, faBuilding,
  faStopwatch,faMapPin, faTag
 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sparring-info',
  templateUrl: './sparring-info.page.html',
  styleUrls: ['./sparring-info.page.scss'],
})
export class SparringInfoPage implements OnInit {
  userTimes = faUserTimes;
  globeAsia = faGlobeAsia;
  dollarSign = faDollarSign;
  building = faBuilding;
  stopwatch = faStopwatch;
  mapPin = faMapPin;
  notes = faTag;

  constructor() { }

  ngOnInit() {
  }

}
