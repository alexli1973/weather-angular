import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../services/shared-data/shared.service";
import {
  IAddress,
  // ICoords,
  // IMeteoCurrent,
  // IMeteoDaily,
  // IMeteoHourly,
  // ITableMeteoData,
  ITableMeteoDataConverted
} from "../../typing/types";
import {MeteoService} from "../../services/meteo/meteo.service";
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {AutoUnsubscribe} from "../../decorators/unsubscription.decorator";

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})

@AutoUnsubscribe
export class MeteoComponent implements OnInit {

  currentAddress: IAddress | null = null;
  meteoData: ITableMeteoDataConverted = {daily: []};

  constructor(private sharedService: SharedService,
              private meteoService: MeteoService) {}

  ngOnInit(): void {
    this.updateCurrentCords();
  }

  updateCurrentCords() {
    this.sharedService.getCurrentCoords().subscribe((currentAddress: IAddress) => {
      this.currentAddress = currentAddress;
      if(this.currentAddress) {
        this.getMeteoData();
      }
    })
  }


  getMeteoData() {
    this.currentAddress && this.meteoService.getMeteoData(this.currentAddress, 3)
      .subscribe((data: any) => {
        this.meteoData = data;
    })

  }

}
