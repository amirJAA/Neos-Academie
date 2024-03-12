import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWeatherComponent } from './main-weather.component';

describe('MainWeatherComponent', () => {
  let component: MainWeatherComponent;
  let fixture: ComponentFixture<MainWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainWeatherComponent]
    });
    fixture = TestBed.createComponent(MainWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
