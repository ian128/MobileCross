import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddneweventPage } from './addnewevent.page';

describe('AddneweventPage', () => {
  let component: AddneweventPage;
  let fixture: ComponentFixture<AddneweventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddneweventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddneweventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
