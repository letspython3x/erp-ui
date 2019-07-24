import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import the new component

import { AccountsComponent } from './accounts.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountsRoutingModule } from './accounts-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountsRoutingModule
  ],
  declarations: [
    AccountsComponent,
  ],
})
export class AccountsDashboardModule {

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/