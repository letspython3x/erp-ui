import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import the new component
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductUpdateQuantityComponent } from './product-update-quantity/product-update-quantity.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductAddComponent,
    ProductEditComponent,
    // ProductUpdateQuantityComponent,    
    ProductsComponent
  ],
  // exports: [
  //   ProductAddComponent,
  //   ProductEditComponent,
  //   ProductUpdateQuantityComponent,    
  //   ProductsComponent
  // ]
})
export class ProductDashboardModule { 

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/