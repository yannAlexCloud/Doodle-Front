import { TestBed } from '@angular/core/testing';

import { IntermediaireServiceService } from './intermediaire-service.service';

describe('IntermediaireServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntermediaireServiceService = TestBed.get(IntermediaireServiceService);
    expect(service).toBeTruthy();
  });
});
