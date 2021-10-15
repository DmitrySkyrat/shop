import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from 'src/assets/app-settings.json';
import { APP_DATA } from './services/local-storage.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: APP_DATA, useValue: data },
  ]
})
export class CoreModule { }
