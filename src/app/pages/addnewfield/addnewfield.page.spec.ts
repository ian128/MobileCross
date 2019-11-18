import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewfieldPage } from './addnewfield.page';

describe('AddnewfieldPage', () => {
  let component: AddnewfieldPage;
  let fixture: ComponentFixture<AddnewfieldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewfieldPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewfieldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
