export type ICoords = {
  lat: string;
  lon: string;
}

export interface IAddress extends ICoords{
  display_name?: string;
  favorite?: boolean;
}

export interface IMeteoHourly {
  temperature_2m: number[];
  relative_humidity_2m: number[];
  rain: number[];
  precipitation_probability: number[];
  time?: string[];
}

export interface IMeteoDaily {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  rain_sum: number[];
  time?: string[];
}

export interface ITableMeteoData {
  time: string;
  temperature_2m?: number;
  relative_humidity_2m?: number;
  rain?: number;
  precipitation_probability?: number;
  rain_sum?: number;
  temperature_2m_max?: number;
  temperature_2m_min?: number;
}

export interface ITableMeteoDataConverted {
  current?: ITableMeteoData;
  hourly?: ITableMeteoData[];
  daily?: ITableMeteoData[];
}

