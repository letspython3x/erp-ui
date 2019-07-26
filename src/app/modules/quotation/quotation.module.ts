import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import the new component
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { QuotationRoutingModule } from './quotation-routing.module';
import { QuotationAddComponent } from './quotation-add/quotation-add.component';
import { QuotationsComponent } from './quotations/quotations.component';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


// RECOMMENDED
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    QuotationRoutingModule,
  ],
  declarations: [
    QuotationAddComponent,
    QuotationsComponent,

  ],
})
export class QuotationDashboardModule { }
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/