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

  ngOnInit() {}

  fieldDetails(){
    this.router.navigate(['/','field-details'])
  }
}
