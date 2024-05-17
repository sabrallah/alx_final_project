import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomedTirageComponent } from './zoomed-tirage.component';

describe('ZoomedTirageComponent', () => {
  let component: ZoomedTirageComponent;
  let fixture: ComponentFixture<ZoomedTirageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomedTirageComponent]
    });
    fixture = TestBed.createComponent(ZoomedTirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
