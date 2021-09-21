import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../SharedModule/shared.module";
import { CartItemComponent } from "./components/cart-item/cart-item.component";
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartComponent } from './components/cart.component';

@NgModule({
    declarations: [CartItemComponent, CartListComponent, CartComponent],
    imports: [RouterModule.forChild([{path: '', component: CartComponent}]), CommonModule, SharedModule],
    exports: []
})
export class CartListModule {}
