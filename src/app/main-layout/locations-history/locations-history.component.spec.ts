import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsHistoryComponent } from './locations-history.component';

describe('LocationsHistoryComponent', () => {
  let component: LocationsHistoryComponent;
  let fixture: ComponentFixture<LocationsHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationsHistoryComponent]
    });
    fixture = TestBed.createComponent(LocationsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
