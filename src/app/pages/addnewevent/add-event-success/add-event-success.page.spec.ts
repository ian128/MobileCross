import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventSuccessPage } from './add-event-success.page';

describe('AddEventSuccessPage', () => {
  let component: AddEventSuccessPage;
  let fixture: ComponentFixture<AddEventSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventSuccessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
