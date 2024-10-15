import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPlotlyComponent } from './media-plotly.component';

describe('MediaPlotlyComponent', () => {
  let component: MediaPlotlyComponent;
  let fixture: ComponentFixture<MediaPlotlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPlotlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaPlotlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
