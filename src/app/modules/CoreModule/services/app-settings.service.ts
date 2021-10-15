import { Injectable } from "@angular/core";
import { catchError, Observable, of, retry } from "rxjs";
import { AppSettingsModel } from "../models/config.model";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: 'root'
})
export class AppSettingsService {
    constructor(
        private localStorageService: LocalStorageService
    ) { }

    getAppSettings(): Observable<AppSettingsModel> {
        return of(this.localStorageService.getSettings()).pipe(
            retry(2),
            catchError((error) => {throw new Error(`Error with getting data ${error}`)}
            )
        )
    }

    setAppSettings(): void {
        this.localStorageService.setAppSettingsToLocalStorage();
    }
}
