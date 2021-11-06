import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { selectCartStatus } from '../store/cart/cart.selector';
import * as CartActions from "../../CoreModule/store/cart/cart.action";

@Injectable({
  providedIn: 'root'
})
export class CartGuard implements CanActivate {

  constructor(private store: Store<AppState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.store.dispatch(CartActions.getEmptyStatus());
    return this.store.select(selectCartStatus);
  }
}
