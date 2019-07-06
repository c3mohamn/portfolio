import { TestBed } from '@angular/core/testing';

import { MatCustomIconService } from './mat-custom-icon.service';

describe('MatCustomIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatCustomIconService = TestBed.get(MatCustomIconService);
    expect(service).toBeTruthy();
  });
});
