import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}

  setToLocalStorage(key: string, value: any) {
    window.localStorage.setItem(key, value);
  }
}
