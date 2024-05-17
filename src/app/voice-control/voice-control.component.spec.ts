import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceControlComponent } from './voice-control.component';

describe('VoiceControlComponent', () => {
  let component: VoiceControlComponent;
  let fixture: ComponentFixture<VoiceControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoiceControlComponent]
    });
    fixture = TestBed.createComponent(VoiceControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
