import { Component, OnInit, OnDestroy } from '@angular/core';
import { Court } from 'src/app/models/court';

@Component({
  selector: 'app-sparring-detail',
  templateUrl: './sparring-detail.page.html',
  styleUrls: ['./sparring-detail.page.scss'],
})
export class SparringDetailPage implements OnInit, OnDestroy {
  court: Court

  ngOnDestroy(): void {
    sessionStorage.removeItem('sparring-details')
  }
  
  constructor(
  ) {
    var res = JSON.parse(sessionStorage.getItem('sparring-details'))
    this.court=res.court
   }

  ngOnInit() {
  }


}
