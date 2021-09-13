import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/MaterialModule/material.module';
import { CartListModule } from './modules/CartModule/cart-list.module';
import { ProductsModule } from './modules/ProductsModule/products-module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CartListModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
