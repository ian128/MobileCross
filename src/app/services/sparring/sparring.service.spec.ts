import { TestBed } from '@angular/core/testing';

import { SparringService } from './sparring.service';

describe('SparringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SparringService = TestBed.get(SparringService);
    expect(service).toBeTruthy();
  });
});
