import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./components/cart.component";
import { ProcessOrderComponent } from "./components/process-order/process-order.component";
import { CartGuard } from "../CoreModule/guards/cart.guard";

const routes: Routes = [
    {path: '', component: CartComponent},
    {path: 'order', component: ProcessOrderComponent, canActivate: [CartGuard]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartRoutingModule {}
