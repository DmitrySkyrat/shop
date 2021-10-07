import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './modules/CoreModule/guards/admin.guard';
import { ErrorComponent } from './modules/SharedModule/components/error/error.component';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./modules/Auth/auth.module').then(m => m.AuthModule)},
  {path: 'products', loadChildren: () => import('./modules/ProductsModule/products-module').then(m => m.ProductsModule)},
  {path: 'cart', loadChildren: () => import('./modules/CartModule/cart-list.module').then(m => m.CartListModule)},
  {path: 'admin', canLoad: [AdminGuard], loadChildren: () => import('./modules/Admin/admin.module').then(m => m.AdminModule)},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: '**', component: ErrorComponent, data: { title: 'error' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
