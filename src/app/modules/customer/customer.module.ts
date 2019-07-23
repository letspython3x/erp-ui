import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import the new component
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomersComponent } from './customers/customers.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    ReactiveFormsModule,
    CustomerRoutingModule
  ],
  declarations: [
    CustomerAddComponent,
    CustomerEditComponent,
    CustomersComponent,
    CustomerDetailComponent
  ],
})
export class CustomerDashboardModule { 

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/