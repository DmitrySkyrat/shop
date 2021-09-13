import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../MaterialModule/material.module";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductViewComponent } from "./components/product-view/product-view.component";
import { ProductComponent } from "./components/product.component";

@NgModule({
    declarations: [ProductComponent, ProductViewComponent, ProductListComponent],
    imports: [RouterModule.forChild([{path: '', component: ProductComponent}]), MaterialModule, CommonModule],
    exports: [RouterModule]
})
export class ProductsModule {}
