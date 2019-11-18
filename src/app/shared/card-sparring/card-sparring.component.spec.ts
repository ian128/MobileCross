import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSparringComponent } from './card-sparring.component';

describe('CardSparringComponent', () => {
  let component: CardSparringComponent;
  let fixture: ComponentFixture<CardSparringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSparringComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSparringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
