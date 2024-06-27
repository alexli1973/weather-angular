import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyTableComponent } from './weekly-table.component';

describe('WeeklyTableComponent', () => {
  let component: WeeklyTableComponent;
  let fixture: ComponentFixture<WeeklyTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyTableComponent]
    });
    fixture = TestBed.createComponent(WeeklyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
