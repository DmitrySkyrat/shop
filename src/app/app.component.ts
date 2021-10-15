import { Component } from '@angular/core';
import { AppSettingsService } from './modules/CoreModule/services/app-settings.service';
import { LocalStorageService } from './modules/CoreModule/services/local-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';
  constructor(private localStorageService: LocalStorageService) {
    this.localStorageService.setAppSettingsToLocalStorage()
  }
}
