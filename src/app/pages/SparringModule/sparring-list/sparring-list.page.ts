import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sparring-list',
  templateUrl: './sparring-list.page.html',
  styleUrls: ['./sparring-list.page.scss'],
})
export class SparringListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  segmentChanged(ev: any) {
    console.log(ev.detail.value);
  }

}
