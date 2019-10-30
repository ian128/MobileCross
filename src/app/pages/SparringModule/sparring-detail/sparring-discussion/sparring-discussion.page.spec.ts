import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparringDiscussionPage } from './sparring-discussion.page';

describe('SparringDiscussionPage', () => {
  let component: SparringDiscussionPage;
  let fixture: ComponentFixture<SparringDiscussionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparringDiscussionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparringDiscussionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
