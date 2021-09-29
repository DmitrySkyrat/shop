import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionService {
  config!: ConfigModel;

  constructor() {}

  setConfig(config: ConfigModel) {
    this.config = config;
  }

  getUser(config: Partial<ConfigModel>) {
    return {...config};
  }
}
