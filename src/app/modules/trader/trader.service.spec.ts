import { TestBed } from '@angular/core/testing';

import { TraderService } from './trader.service';

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraderService = TestBed.get(TraderService);
    expect(service).toBeTruthy();
  });
});
