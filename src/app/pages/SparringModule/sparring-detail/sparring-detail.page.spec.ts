import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparringDetailPage } from './sparring-detail.page';

describe('SparringDetailPage', () => {
  let component: SparringDetailPage;
  let fixture: ComponentFixture<SparringDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparringDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparringDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
