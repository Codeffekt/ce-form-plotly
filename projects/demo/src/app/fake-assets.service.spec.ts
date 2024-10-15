import { TestBed } from '@angular/core/testing';

import { FakeAssetsService } from './fake-assets.service';

describe('FakeAssetsService', () => {
  let service: FakeAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
