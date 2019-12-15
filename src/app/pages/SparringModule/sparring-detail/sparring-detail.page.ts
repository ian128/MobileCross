import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sparring-detail',
  templateUrl: './sparring-detail.page.html',
  styleUrls: ['./sparring-detail.page.scss'],
})
export class SparringDetailPage implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    sessionStorage.removeItem('sparring-details')
  }
  
  constructor(
  ) { }

  ngOnInit() {
   
  }


}
