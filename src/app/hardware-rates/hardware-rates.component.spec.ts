import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareRatesComponent } from './hardware-rates.component';

describe('HardwareRatesComponent', () => {
  let component: HardwareRatesComponent;
  let fixture: ComponentFixture<HardwareRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
