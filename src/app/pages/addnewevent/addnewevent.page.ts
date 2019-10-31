import { Component, OnInit } from '@angular/core';
import { faDirections } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-addnewevent',
  templateUrl: './addnewevent.page.html',
  styleUrls: ['./addnewevent.page.scss'],
})
export class AddneweventPage implements OnInit {
  direction = faDirections;
  constructor() { }

  ngOnInit() {
  }

}
