import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";

const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'add', component: ProductAddComponent },
    { path: 'edit', component: ProductEditComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}