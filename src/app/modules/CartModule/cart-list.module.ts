import { NgModule } from "@angular/core";
import { AsyncEmailValidatorDirective } from "../CoreModule/validators/async-email.validator.directive";
import { FirstLetterValidator } from "../CoreModule/validators/first-name.validator";
import { MaterialModule } from "../MaterialModule/material.module";
import { SharedModule } from "../SharedModule/shared.module";
import { CartRoutingModule } from "./cart-routing.module";
import { CartItemComponent } from "./components/cart-item/cart-item.component";
import { CartListComponent, DialogOrder } from './components/cart-list/cart-list.component';
import { CartComponent } from './components/cart.component';
import { ProcessOrderComponent } from './components/process-order/process-order.component';

@NgModule({
    declarations: [
        CartItemComponent, 
        CartListComponent, 
        CartComponent, 
        ProcessOrderComponent, 
        DialogOrder,
        FirstLetterValidator,
        AsyncEmailValidatorDirective
    ],
    imports: [CartRoutingModule, SharedModule, MaterialModule],
    exports: []
})
export class CartListModule {}
