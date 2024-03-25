import { Injectable } from '@angular/core';

export interface Country {
  name: string;
  code: string | null;
}

export interface GridRowModel {
  title: string,
  phone: number,
  id: number
}

export interface TabModel {
  title: string,
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _countries: Country[] = [
    { name: 'Australia', code: 'AU' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Polska', code: 'PL' },
    { name: 'Bahamas', code: 'BS' },
  ]
  private _data: GridRowModel[] = [
    { title: "tomato", phone: 123, id: 1000 },
    { title: "pumpkin", phone: 567, id: 1001 },
  ];

  private _config = [{ key: 'title' }, { key: 'id' }];
  private _tabs: TabModel[] = [
    { title: 'About', content: 'This is the <h1>About</h1> tab' },
    { title: 'Contact us', content: '<h1>Contact</h1> us here' }
  ];

  get countries(): Country[] {
    return this._countries;
  }

  get gridData(): GridRowModel[] {
    return this._data;
  }

  get gridConfig() {
    return this._config;
  }

  get tabs(): TabModel[] {
    return this._tabs;
  }
}
