import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartHorizontalComponent } from './bar-chart-horizontal.component';

describe('BarChartHorizontalComponent', () => {
  let component: BarChartHorizontalComponent;
  let fixture: ComponentFixture<BarChartHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarChartHorizontalComponent]
    });
    fixture = TestBed.createComponent(BarChartHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
