import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CartItemComponent } from "./components/cart-item/cart-item.component";
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
    declarations: [CartItemComponent, CartListComponent],
    imports: [RouterModule.forChild([{path: '', component: CartListComponent}]), CommonModule],
    exports: []
})
export class CartListModule {}
