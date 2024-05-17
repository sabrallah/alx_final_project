import { TestBed } from '@angular/core/testing';

import { FlipedCardsService } from './fliped-cards.service';

describe('FlipedCardsService', () => {
  let service: FlipedCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipedCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
