import { TestBed } from '@angular/core/testing';

import { AddNewFieldService } from './add-new-field.service';

describe('AddNewFieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddNewFieldService = TestBed.get(AddNewFieldService);
    expect(service).toBeTruthy();
  });
});
