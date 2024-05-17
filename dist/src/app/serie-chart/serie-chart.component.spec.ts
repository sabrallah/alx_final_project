import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieChartComponent } from './serie-chart.component';

describe('SerieChartComponent', () => {
  let component: SerieChartComponent;
  let fixture: ComponentFixture<SerieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerieChartComponent]
    });
    fixture = TestBed.createComponent(SerieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
