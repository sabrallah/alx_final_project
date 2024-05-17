import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepingModeComponent } from './sleeping-mode.component';

describe('SleepingModeComponent', () => {
  let component: SleepingModeComponent;
  let fixture: ComponentFixture<SleepingModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SleepingModeComponent]
    });
    fixture = TestBed.createComponent(SleepingModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
