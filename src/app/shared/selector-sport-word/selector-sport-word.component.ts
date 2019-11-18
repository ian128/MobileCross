import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selector-sport-word',
  templateUrl: './selector-sport-word.component.html',
  styleUrls: ['./selector-sport-word.component.scss'],
})
export class SelectorSportWordComponent implements OnInit {
  @Output() onSelected=new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.onSelected.emit('badminton')
  }

  segmentChanged(e){
    this.onSelected.emit(e.detail.value);
  }

}
