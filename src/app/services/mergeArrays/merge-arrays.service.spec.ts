import { TestBed } from '@angular/core/testing';

import { MergeArraysService } from './merge-arrays.service';

describe('MergeArraysService', () => {
  let service: MergeArraysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MergeArraysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
