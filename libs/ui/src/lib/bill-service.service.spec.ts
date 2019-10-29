import { TestBed } from '@angular/core/testing';

import { billServiceService } from './bill-service.service';

describe('billServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: billServiceService = TestBed.get(
      billServiceService
    );
    expect(service).toBeTruthy();
  });
});
