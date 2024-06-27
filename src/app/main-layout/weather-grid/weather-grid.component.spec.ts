import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGridComponent } from './weather-grid.component';

describe('WeatherGridComponent', () => {
  let component: WeatherGridComponent;
  let fixture: ComponentFixture<WeatherGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherGridComponent]
    });
    fixture = TestBed.createComponent(WeatherGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
