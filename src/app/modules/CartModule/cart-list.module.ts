import { NgModule } from "@angular/core";
import { SharedModule } from "../SharedModule/shared.module";
import { CartRoutingModule } from "./cart-routing.module";
import { CartItemComponent } from "./components/cart-item/cart-item.component";
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartComponent } from './components/cart.component';
import { ProcessOrderComponent } from './components/process-order/process-order.component';

@NgModule({
    declarations: [CartItemComponent, CartListComponent, CartComponent, ProcessOrderComponent],
    imports: [CartRoutingModule, SharedModule],
    exports: []
})
export class CartListModule {}
