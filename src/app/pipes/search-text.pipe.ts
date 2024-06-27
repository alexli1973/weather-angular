import { Pipe, PipeTransform } from '@angular/core';
import {ITableMeteoData} from "../typing/types";

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {

  // @ts-ignore
  transform(items: ITableMeteoData[], keys: {'isTime'}, value: string) {
    if (!value) { return items; }
    if (!items) { return []; }
   return items.filter((item: ITableMeteoData) => item.time.includes(value))
  }

}
