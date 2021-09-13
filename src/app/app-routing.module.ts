import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'products', loadChildren: () => import('./modules/ProductsModule/products-module').then(m => m.ProductsModule)},
  {path: 'cart', loadChildren: () => import('./modules/CartModule/cart-list.module').then(m => m.CartListModule)},
  {path: '', redirectTo: 'products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
