import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import {IAddress, ICoords} from "../../typing/types";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private currentCoords$: BehaviorSubject<IAddress | ICoords> = new BehaviorSubject<IAddress | ICoords>({lat: '', lon: ''});

  public getCurrentCoords(): Observable<IAddress | ICoords> {
    return this.currentCoords$.asObservable();
  }

  public setCurrentCoords(data: IAddress | ICoords) {
    this.currentCoords$.next(data);
  }
}
