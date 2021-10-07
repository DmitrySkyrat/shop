import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, NavigationExtras, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad, CanActivate {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUser();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
    return this.checkUser();
  }

  private checkUser(): boolean {
    if (this.localStorageService.checkAdmin()) {
      const navigationExtras: NavigationExtras = {
        queryParams: {status: 'admin'}
      }
      return true
    }
    this.router.navigate(['/login']);
    return false
  }
}
