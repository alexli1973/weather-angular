import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyTableComponent } from './hourly-table.component';
import {ITableMeteoData} from "../../typing/types";

describe('HourlyTableComponent', () => {
  let component: HourlyTableComponent;
  let fixture: ComponentFixture<HourlyTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourlyTableComponent]
    });
    fixture = TestBed.createComponent(HourlyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty data array by default', () => {
    expect(component.data).toEqual([]);
  });

  it('should accept data input', () => {
    const mockData: ITableMeteoData[] = [
      {
        "time": "2024-06-27T00:00",
        "temperature_2m": 18,
        "relative_humidity_2m": 92,
        "precipitation_probability": 0,
        "rain": 0
      },
      {
        "time": "2024-06-27T01:00",
        "temperature_2m": 17.8,
        "relative_humidity_2m": 93,
        "precipitation_probability": 0,
        "rain": 0
      }
    ];
    component.data = mockData;
    fixture.detectChanges();
    expect(component.data).toEqual(mockData);
  });

});
