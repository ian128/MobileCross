import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sport-selector',
  templateUrl: './sport-selector.component.html',
  styleUrls: ['./sport-selector.component.scss'],
})
export class SportSelectorComponent implements OnInit {
  @Output() onSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.onSelected.emit('badminton')
  }

}
