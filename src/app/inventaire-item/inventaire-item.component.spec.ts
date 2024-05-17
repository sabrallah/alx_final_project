import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireItemComponent } from './inventaire-item.component';

describe('InventaireItemComponent', () => {
  let component: InventaireItemComponent;
  let fixture: ComponentFixture<InventaireItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventaireItemComponent]
    });
    fixture = TestBed.createComponent(InventaireItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
