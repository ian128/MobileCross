import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Court } from 'src/app/models/court';

@Component({
  selector: 'app-card-field-short',
  templateUrl: './card-field-short.component.html',
  styleUrls: ['./card-field-short.component.scss'],
})
export class CardFieldShortComponent implements OnInit {
  @Input() court: Court
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(this.court == null) this.court={
      photo: "https://images.unsplash.com/photo-1487466365202-1afdb86c764e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      name: "placeholder",
      location: "yeah"
    }
  }

  fieldDetails(){
    this.router.navigate(['/','field-details'])
  }
}
