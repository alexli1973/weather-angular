import { Injectable } from '@angular/core';
import * as Leaflet from 'leaflet';
import "leaflet-control-geocoder";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {BASE_NOMINATIM_URL} from "../../app.constants";
import { IAddress } from "../../typing/types";

@Injectable({
  providedIn: 'root'
})
export class LeafletService {

  constructor(private http: HttpClient) { }

  getAddress(params: {}): Observable<IAddress> {
    let url: string = `https://${BASE_NOMINATIM_URL}/reverse?format=json`;
    return this.http.get(url, {params})
      .pipe(map((data: any) => {
        let address: IAddress = {
          display_name: data.display_name,
          lat: data.lat,
          lon: data.lon,
      };
        //return addressData.map((addr: any): Address => {
        //console.log('getAddress', address);
        return address;
        //})
    }))
  }
  // getAddress(params: {}) {
  //   let url: string = `https://${BASE_NOMINATIM_URL}/reverse?format=json`;
  //   return this.http.get(url, {params}).subscribe((res) => res)
  // }

}
