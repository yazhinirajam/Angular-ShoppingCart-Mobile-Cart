import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSelectionComponent } from './mobile-selection.component';

describe('MobileSelectionComponent', () => {
  let component: MobileSelectionComponent;
  let fixture: ComponentFixture<MobileSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
