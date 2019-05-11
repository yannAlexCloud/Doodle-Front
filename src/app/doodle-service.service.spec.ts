import { TestBed } from '@angular/core/testing';

import { DoodleServiceService } from './doodle-service.service';

describe('DoodleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoodleServiceService = TestBed.get(DoodleServiceService);
    expect(service).toBeTruthy();
  });
});
