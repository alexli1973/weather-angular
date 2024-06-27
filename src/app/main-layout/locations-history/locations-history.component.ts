import {Component, OnInit, SimpleChanges} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {IAddress} from "../../typing/types";
import {SharedService} from "../../services/shared-data/shared.service";
import {AutoUnsubscribe} from "../../decorators/unsubscription.decorator";

@Component({
  selector: 'app-locations-history',
  templateUrl: './locations-history.component.html',
  styleUrls: ['./locations-history.component.scss']
})

@AutoUnsubscribe
export class LocationsHistoryComponent implements OnInit {

  locationsList: IAddress[] = [];

  constructor(private sharedService: SharedService, private localStorageService: LocalStorageService)  {
  }

  ngOnInit(): void {
    this.initLocationsList();
    this.sharedService.getCurrentCoords().subscribe((currentAddress: IAddress) => {
      this.locationsList.push(currentAddress);
    })
  }

  initLocationsList() {
    this.locationsList = this.localStorageService.getData();
  }

}
