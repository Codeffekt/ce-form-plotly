import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormBlockComponent } from './demo-form-block.component';

describe('DemoFormBlockComponent', () => {
  let component: DemoFormBlockComponent;
  let fixture: ComponentFixture<DemoFormBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoFormBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoFormBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
