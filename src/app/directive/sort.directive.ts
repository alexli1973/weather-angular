import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[colSort]'
})
export class SortDirective {
  @Input() sortingQueryString?:string;
  @Input() sortDirection?: string;
  sortDirectionUpd?: string;
  @Output() sortEvent: EventEmitter<any> = new EventEmitter<{}>();

  @HostListener('click')
  sort() {
    this.sortDirectionUpd = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortEvent.emit({sortDirection: this.sortDirectionUpd, sortingQueryString: this.sortingQueryString});
  }

  constructor() { }

}
