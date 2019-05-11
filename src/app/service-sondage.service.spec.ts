import { TestBed } from '@angular/core/testing';

import { ServiceSondageService } from './service-sondage.service';

describe('ServiceSondageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceSondageService = TestBed.get(ServiceSondageService);
    expect(service).toBeTruthy();
  });
});
