import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ConfigModel, AppSettingsModel } from '../models/config.model';

export const APP_DATA = new InjectionToken<AppSettingsModel>('projectInfo');
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  config!: ConfigModel;

  constructor(@Inject(APP_DATA) private app_settings: AppSettingsModel) {}

  setToLocalStorage(key: string, value: any) {
    window.localStorage.setItem(key, value);
  }

  checkAdmin(): boolean {
    return window.localStorage.getItem('user') === 'admin';
  }

  getUser(config: Partial<ConfigModel>) {
    return { ...config };
  }

  setAppSettingsToLocalStorage(): void {
    for (let key in this.app_settings) {
      window.localStorage.setItem(key, this.app_settings[key])
    }
  }

  checkLocalStorege() {
    !!window.localStorage.hasOwnProperty('App');
  }

  getSettings() {
    return this.app_settings;
  }
}
