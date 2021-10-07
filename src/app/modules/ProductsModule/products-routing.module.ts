import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductInfoComponent } from "./components/product-info/product-info.component";
import { ProductComponent } from "./components/product.component";

const routes: Routes = [
    {path: 'product/:productID', component: ProductInfoComponent},
    {path: '', component: ProductComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}
