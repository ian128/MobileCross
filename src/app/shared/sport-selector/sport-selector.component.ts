import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sport-selector',
  templateUrl: './sport-selector.component.html',
  styleUrls: ['./sport-selector.component.scss'],
})
export class SportSelectorComponent implements OnInit {
  @Output() onSelected = new EventEmitter();
  @Input() selected: string | null
  
  constructor() { }

  ngOnInit() {
    if(this.selected == null){
      this.selected = "badminton"
      this.onSelected.emit('badminton')
    }else{
      this.onSelected.emit(this.selected)
    }
  }

}
