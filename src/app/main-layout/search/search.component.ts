import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() placeholderText?: string = 'Search';
  @Input() searchControl: FormControl = new FormControl('');
  @Output() onChange = new EventEmitter<string>();

  handlerInputChange(ev: string) {
    this.onChange.emit(ev)
  }

}
