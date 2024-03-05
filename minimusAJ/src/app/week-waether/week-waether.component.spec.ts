import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekWaetherComponent } from './week-waether.component';

describe('WeekWaetherComponent', () => {
  let component: WeekWaetherComponent;
  let fixture: ComponentFixture<WeekWaetherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekWaetherComponent]
    });
    fixture = TestBed.createComponent(WeekWaetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
