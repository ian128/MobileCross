import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentFieldPage } from './rent-field.page';

describe('RentFieldPage', () => {
  let component: RentFieldPage;
  let fixture: ComponentFixture<RentFieldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentFieldPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentFieldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
