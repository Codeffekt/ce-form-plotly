import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAssetArrayComponent } from './demo-asset-array.component';

describe('DemoAssetArrayComponent', () => {
  let component: DemoAssetArrayComponent;
  let fixture: ComponentFixture<DemoAssetArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoAssetArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoAssetArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
