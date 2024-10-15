import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeFormPlotlyComponent } from './ce-form-plotly.component';

describe('CeFormPlotlyComponent', () => {
  let component: CeFormPlotlyComponent;
  let fixture: ComponentFixture<CeFormPlotlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeFormPlotlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeFormPlotlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
