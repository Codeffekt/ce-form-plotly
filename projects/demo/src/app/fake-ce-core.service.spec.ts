import { TestBed } from '@angular/core/testing';

import { FakeCeCoreService } from './fake-ce-core.service';

describe('FakeCeCoreService', () => {
  let service: FakeCeCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeCeCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
