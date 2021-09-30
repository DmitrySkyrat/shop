import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../MaterialModule/material.module";
import { SharedModule } from "../SharedModule/shared.module";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductViewComponent } from "./components/product-view/product-view.component";
import { ProductComponent } from "./components/product.component";
import { ToggleMenuDirective } from "./directives/toggle-menu.directive";

@NgModule({
    declarations: [ProductComponent, ProductViewComponent, ProductListComponent, ToggleMenuDirective],
    imports: [RouterModule.forChild([{path: '', component: ProductComponent}]), MaterialModule, SharedModule],
    exports: [RouterModule]
})
export class ProductsModule {}
