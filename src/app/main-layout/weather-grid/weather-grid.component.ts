import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IAddress, ITableMeteoData, ITableMeteoDataConverted} from "../../typing/types";
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {ModalComponent} from "../modal/modal.component";
import {MeteoService} from "../../services/meteo/meteo.service";
import {SharedService} from "../../services/shared-data/shared.service";

@Component({
  selector: 'app-weather-grid',
  templateUrl: './weather-grid.component.html',
  styleUrls: ['./weather-grid.component.scss']
})
export class WeatherGridComponent implements OnInit {
  @Input() weatherData?: ITableMeteoData[];
  @Input() isDaily: boolean = true;
  @Input() days: number = 3;

  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  sortDirection: string = 'asc';
  sortingQueryString: string | null = 'time';

  searchControl:FormControl = new FormControl('');
  searchText: string = '';

  private compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

  tableHeader = [
    {field: 'time', headerName: 'Date', sortable: true },
    {field: 'temperature_2m_max', headerName: 'Temperature Min', sortable: true },
    {field: 'temperature_2m_min', headerName: 'Temperature Max', sortable: true },
    {field: 'rain_sum', headerName: 'Rain', sortable: true },
  ];

  currentAddress: IAddress | null = null;

  constructor(public dialog: MatDialog,
              private meteoService: MeteoService,
              private sharedService: SharedService) {}

  ngOnInit() {
    this.getCurrentCords();
  }

  getCurrentCords() {
    this.sharedService.getCurrentCoords().subscribe((currentAddress: IAddress) => {
      this.currentAddress = currentAddress;
    })
  }
  sortEventHandler(ev: { sortDirection: string; sortingQueryString: string | null; }) {
    this.sortDirection = ev.sortDirection;
    this.sortingQueryString = ev.sortingQueryString;
    this.weatherData = this.weatherData?.sort((a:ITableMeteoData, b:ITableMeteoData) => {
      // @ts-ignore
      let x = a[this.sortingQueryString];
      // @ts-ignore
      let y = b[this.sortingQueryString];

      if (typeof x === 'string') {
        x = x.toLowerCase();
        y = y.toLowerCase();
      }

      const res = this.compare(x, y);
      return this.sortDirection === 'asc' ? res : -res;
    });

  }

  handlerInputChange(ev: string) {
    this.searchText = ev;
  }

  openDialog(row: any): void {
    this.currentAddress && this.meteoService.getMeteoData(this.currentAddress, 7)
      .subscribe((data:ITableMeteoDataConverted) => {
        this.dialog.open(ModalComponent, {
          width: '90%',
          data: data
        });
      })

  }

}
