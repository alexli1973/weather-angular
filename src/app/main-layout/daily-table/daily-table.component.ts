import {Component, Input} from '@angular/core';
import {ITableMeteoData} from "../../typing/types";

@Component({
  selector: 'app-daily-table',
  templateUrl: './daily-table.component.html',
  styleUrls: ['./daily-table.component.scss']
})
export class DailyTableComponent {
  @Input() data: ITableMeteoData[] = [];

  tableHeader = [
    {field: 'time', headerName: 'Date' },
    {field: 'temperature_2m_max', headerName: 'Temperature Min' },
    {field: 'temperature_2m_min', headerName: 'Temperature Max'},
    {field: 'rain_sum', headerName: 'Rain'},
  ];
}
