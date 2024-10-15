import { TestBed } from '@angular/core/testing';

import { CeFormPlotlyService } from './ce-form-plotly.service';

describe('CeFormPlotlyService', () => {
  let service: CeFormPlotlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeFormPlotlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
