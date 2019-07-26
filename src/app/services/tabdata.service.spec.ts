import { TestBed } from '@angular/core/testing';

import { TabdataService } from './tabdata.service';

describe('TabdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabdataService = TestBed.get(TabdataService);
    expect(service).toBeTruthy();
  });
});
