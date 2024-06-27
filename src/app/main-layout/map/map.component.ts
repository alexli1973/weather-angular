import {Component, AfterViewInit, OnInit, Output, EventEmitter} from '@angular/core';
import * as L from 'leaflet';
import {LeafletService} from "../../services/leaflet/leaflet.service";
import {IAddress} from "../../typing/types";
import {marker, Marker} from "leaflet";
import {SharedService} from "../../services/shared-data/shared.service";
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {AutoUnsubscribe} from "../../decorators/unsubscription.decorator";

//Map marker errors fix
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

@AutoUnsubscribe
export class MapComponent implements  OnInit, AfterViewInit  {
  @Output() mapClick: EventEmitter<any> = new EventEmitter();
  currentAddress: IAddress = {display_name: '', lat: '', lon: ''};
  currentMarker: undefined | Marker<any>;
  map: L.Map | undefined;
  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    //layers: getLayers(),
    zoom: 8,
    maxZoom: 12,
    minZoom: 3,
    center: L.latLng([ 46.879966, -121.726909 ])
  };
  private localStorageData: IAddress[] = [];

  constructor(private leafletService: LeafletService,
              private sharedService: SharedService,
              private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.initLocationsList();
  }

  ngAfterViewInit () {}

  //TODO - init from local storage or favorites
  initMap() {
    const marker = this.map && L.marker([51.505, -0.09]).addTo(this.map);
  }

  onMapReady($event: L.Map) {
    this.map = $event;
    // this.initMap(); //TODO - set markers
  }

  mapClicked($event: any) {
    const payload = {
      lat: $event?.latlng?.lat,
      lon: $event.latlng.lng,
      zoom:8
    };
    this.leafletService.getAddress(payload).subscribe((address: IAddress) => {
      this.currentAddress = address;
      this.sharedService.setCurrentCoords(this.currentAddress);
      //Save to local storage
      this.localStorageData.push(this.currentAddress);
      this.localStorageService.saveData(this.localStorageData);
    });

     if (this.currentMarker) {
       this.map?.removeLayer(this.currentMarker)
     }
     this.currentMarker =  this.map && L.marker([$event?.latlng?.lat, $event.latlng.lng]).addTo(this.map);
  }

  initLocationsList() {
    this.localStorageData = this.localStorageService.getData();
    if (this.localStorageData?.length) {
      this.initLastSelectedLocation();
    }
  }

  initLastSelectedLocation() {
     this.sharedService.setCurrentCoords(this.localStorageData[this.localStorageData?.length - 1]);
  }
}
