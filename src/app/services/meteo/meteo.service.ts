import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import { BASE_OPEN_METEO_URL } from "../../app.constants";
import {
  ICoords,
  IMeteoDaily,
  IMeteoHourly,
  ITableMeteoDataConverted
} from "../../typing/types";

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  getMeteoData(data: ICoords, forecastDays: number): Observable<any> {
    let url: string = `https://${BASE_OPEN_METEO_URL}`;
    const params = {
      latitude: data.lat,
      longitude: data.lon,
      current: ['temperature_2m', 'relative_humidity_2m', 'rain', 'wind_speed_10m'],
      hourly: ['temperature_2m', 'relative_humidity_2m', 'precipitation_probability', 'rain'],
      daily: ['temperature_2m_max', 'temperature_2m_min', 'rain_sum'],
      forecast_days: forecastDays
    }
    return this.http.get(url, {params})
      .pipe(map((data: any) => {
        return {
          current: data?.current,
          hourly: this.convertMeteoData(data?.hourly, ['time','temperature_2m', 'relative_humidity_2m', 'precipitation_probability', 'rain']),
          daily: this.convertMeteoData(data?.daily, ['time','temperature_2m_max', 'temperature_2m_min', 'rain_sum'])
        };
    }))
  }

  convertMeteoData(obj: IMeteoHourly | IMeteoDaily, props: string[]) {
    const result: ITableMeteoDataConverted[] = [];
    // @ts-ignore
    const length = obj[props[0]]?.length; // Assuming all arrays are of the same length
    for (let i = 0; i < length; i++) {
      const newObj: {} = {};
      props.forEach(prop => {
        // @ts-ignore
        newObj[prop] = obj[prop][i];
      });
      result.push(<ITableMeteoDataConverted>newObj);
    }
    return result;
  }

}
