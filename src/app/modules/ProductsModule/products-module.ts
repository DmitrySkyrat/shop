import { NgModule } from "@angular/core";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { MaterialModule } from "../MaterialModule/material.module";
import { SharedModule } from "../SharedModule/shared.module";
import { ProductCartComponent } from "./components/product-cart/product-cart.component";
import { ProductInfoComponent } from "./components/product-info/product-info.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { DialogProductViewComponent, ProductViewComponent } from "./components/product-view/product-view.component";
import { ProductComponent } from "./components/product.component";
import { ToggleMenuDirective } from "./directives/toggle-menu.directive";
import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
    declarations: [
        ProductComponent,
        ProductViewComponent,
        ProductListComponent,
        ProductInfoComponent,
        ProductCartComponent,
        DialogProductViewComponent,
        ToggleMenuDirective
    ],
    imports: [
        MaterialModule,
        SharedModule,
        InfiniteScrollModule,
        ProductsRoutingModule
        ],
    exports: []
})
export class ProductsModule {}
