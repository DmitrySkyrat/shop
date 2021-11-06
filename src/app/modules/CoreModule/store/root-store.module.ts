import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ProductsStoreModule } from './products/products-store.module';
import { CartStoreModule } from './cart/cart-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../../environments/environment';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { CustomSerializer } from '../store/router/router.custom-serializer';
import { routerReducers } from '../store/router/router.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers, {
      // All checks will automatically be disabled in production builds
      runtimeChecks: {
        strictStateImmutability: true, // default value is true
        strictActionImmutability: true, // default value is true
        strictStateSerializability: false, // default value is false
        strictActionSerializability: false, // default value is false
        strictActionWithinNgZone: true, // default value is false
        strictActionTypeUniqueness: true // default value is false
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
      serializer: CustomSerializer // has a priority over routerState
    }),
    ProductsStoreModule,
    CartStoreModule
  ]
})
export class RootStoreModule { }
