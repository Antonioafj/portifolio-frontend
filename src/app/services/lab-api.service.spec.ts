import { TestBed } from '@angular/core/testing';

import { LabApiService } from './lab-api.service';

describe('LabApiService', () => {
  let service: LabApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
