import { TestBed } from '@angular/core/testing';

import { BestAndWorstService } from './best-and-worst.service';

describe('BestAndWorstService', () => {
  let service: BestAndWorstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestAndWorstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
