import { TestBed } from '@angular/core/testing';

import { RentFieldService } from './rent-field.service';

describe('RentFieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentFieldService = TestBed.get(RentFieldService);
    expect(service).toBeTruthy();
  });
});
