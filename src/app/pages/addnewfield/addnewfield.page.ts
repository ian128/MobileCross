import { Component, OnInit } from '@angular/core';
import { faDirections } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-addnewfield',
  templateUrl: './addnewfield.page.html',
  styleUrls: ['./addnewfield.page.scss'],
})
export class AddnewfieldPage implements OnInit {
  direction = faDirections;
  constructor() { }

  ngOnInit() {
  }

}
