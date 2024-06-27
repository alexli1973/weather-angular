import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from "@angular/common/http";
import { MeteoComponent } from './meteo/meteo.component';
import { WeatherGridComponent } from './weather-grid/weather-grid.component';
import {AppModule} from "../app.module";
import {SortDirective} from "../directive/sort.directive";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SearchComponent } from './search/search.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SearchTextPipe} from "../pipes/search-text.pipe";
import { DividerComponent } from './divider/divider.component';
import { LocationsHistoryComponent } from './locations-history/locations-history.component';
import { ModalComponent } from './modal/modal.component';
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { HourlyTableComponent } from './hourly-table/hourly-table.component';
import { WeeklyTableComponent } from './weekly-table/weekly-table.component';
import { DailyTableComponent } from './daily-table/daily-table.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    MapComponent,
    MeteoComponent,
    WeatherGridComponent,
    SortDirective,
    SearchTextPipe,
    SearchComponent,
    DividerComponent,
    LocationsHistoryComponent,
    ModalComponent,
    HourlyTableComponent,
    WeeklyTableComponent,
    DailyTableComponent
  ],
  exports: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    LeafletModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class MainLayoutModule { }
