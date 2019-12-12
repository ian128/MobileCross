import { TestBed } from '@angular/core/testing';

import { AddNewEventService } from './add-new-event.service';

describe('AddNewEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddNewEventService = TestBed.get(AddNewEventService);
    expect(service).toBeTruthy();
  });
});
