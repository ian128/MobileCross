import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-field-short',
  templateUrl: './card-field-short.component.html',
  styleUrls: ['./card-field-short.component.scss'],
})
export class CardFieldShortComponent implements OnInit {
  @Input() imgUrl: String
  @Input() title: String
  @Input() subtitle: String
  @Input() fieldId: String
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  fieldDetails(){
    this.router.navigate(['/','field-details'])
  }
}
