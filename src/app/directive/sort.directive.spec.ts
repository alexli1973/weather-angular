import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SortDirective } from './sort.directive';

@Component({
  template: `
    <div colSort [sortingQueryString]="'fieldName'" [sortDirection]="'asc'" (sortEvent)="onSort($event)"></div>
  `
})
class TestComponent {
  onSort(event: any) {}
}

describe('SortDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directiveElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortDirective, TestComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    directiveElement = fixture.debugElement.query(By.directive(SortDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = directiveElement.injector.get(SortDirective);
    expect(directive).toBeTruthy();
  });

  it('should emit sortEvent with correct parameters on click', () => {
    const directive = directiveElement.injector.get(SortDirective);
    const spy = spyOn(component, 'onSort');

    // Trigger click event on the host element
    directiveElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Expect the sortEvent to have been emitted with the correct parameters
    expect(spy).toHaveBeenCalledWith({ sortDirection: 'desc', sortingQueryString: 'fieldName' });
  });

  it('should toggle sortDirectionUpd property correctly on click', () => {
    const directive = directiveElement.injector.get(SortDirective);

    // Initial state
    expect(directive.sortDirectionUpd).toBeUndefined();

    // Click
    directiveElement.triggerEventHandler('click', null);
    expect(directive.sortDirectionUpd).toBe('desc');

  });
});

