import { TestBed, inject } from '@angular/core/testing';

import { NonFunctionalService } from './non-functional.service';

describe('NonFunctionalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NonFunctionalService]
    });
  });

  it('should be created', inject([NonFunctionalService], (service: NonFunctionalService) => {
    expect(service).toBeTruthy();
  }));
});
