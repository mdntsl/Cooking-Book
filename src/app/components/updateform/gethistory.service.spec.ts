import { TestBed } from '@angular/core/testing';

import { GethistoryService } from './gethistory.service';

describe('GethistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GethistoryService = TestBed.get(GethistoryService);
    expect(service).toBeTruthy();
  });
});
