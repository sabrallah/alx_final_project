import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipComponenetComponent } from './flip-componenet.component';

describe('FlipComponenetComponent', () => {
  let component: FlipComponenetComponent;
  let fixture: ComponentFixture<FlipComponenetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlipComponenetComponent]
    });
    fixture = TestBed.createComponent(FlipComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
