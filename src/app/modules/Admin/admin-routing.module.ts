import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin.component';
import { ManageUsersComponent } from "./components/manage-users/manage-users.component";
import { ManageProductsComponent } from "./components/manage-products/manage-products.component";
import { ManageOrdersComponent } from "./components/manage-orders/manage-orders.component";
import { EditProductComponent } from "./components/edit-product/edit-product.component";
import { AdminGuard } from '../CoreModule/guards/admin.guard';
import { CanDeactivateGuard } from '../CoreModule/guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    canActivate: [AdminGuard],
      children: [
        {path: 'users', component: ManageUsersComponent},
        {path: 'products', component: ManageProductsComponent},
        {path: 'orders', component: ManageOrdersComponent},
        {path: 'products/edit:id', component: EditProductComponent, canDeactivate: [CanDeactivateGuard],}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
