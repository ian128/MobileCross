import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveProgramPage } from './active-program.page';

describe('ActiveProgramPage', () => {
  let component: ActiveProgramPage;
  let fixture: ComponentFixture<ActiveProgramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveProgramPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveProgramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
