import {Component, Input} from '@angular/core';
import {ITableMeteoData} from "../../typing/types";

@Component({
  selector: 'app-hourly-table',
  templateUrl: './hourly-table.component.html',
  styleUrls: ['./hourly-table.component.scss']
})
export class HourlyTableComponent {
  @Input() data: ITableMeteoData[] = [];

}
