import { TestBed } from '@angular/core/testing';

import { BardataService } from './bardata.service';

describe('BardataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BardataService = TestBed.get(BardataService);
    expect(service).toBeTruthy();
  });
});
