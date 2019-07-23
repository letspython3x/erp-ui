import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import the new component
import { CategoryComponent } from './category.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryRoutingModule } from './category-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    ReactiveFormsModule,
    CategoryRoutingModule
  ],
  declarations: [
    CategoryComponent,
  ],
})
export class CategoryDashboardModule { 

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/