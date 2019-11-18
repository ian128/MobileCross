import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparringInfoPage } from './sparring-info.page';

describe('SparringInfoPage', () => {
  let component: SparringInfoPage;
  let fixture: ComponentFixture<SparringInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparringInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparringInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
