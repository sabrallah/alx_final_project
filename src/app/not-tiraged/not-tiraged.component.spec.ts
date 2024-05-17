import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotTiragedComponent } from './not-tiraged.component';

describe('NotTiragedComponent', () => {
  let component: NotTiragedComponent;
  let fixture: ComponentFixture<NotTiragedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotTiragedComponent]
    });
    fixture = TestBed.createComponent(NotTiragedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
