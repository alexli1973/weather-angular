import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageKey: string = 'historyLocationData';

  constructor() { }

  saveData(data: any[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getData(): any[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
}
