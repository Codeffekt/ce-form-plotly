import { TestBed } from '@angular/core/testing';

import { FakeSpaceFormPathService } from './fake-space-form-path.service';

describe('FakeSpaceFormPathService', () => {
  let service: FakeSpaceFormPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeSpaceFormPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
