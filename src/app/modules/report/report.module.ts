import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import the new component
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReportRoutingModule
  ],
  declarations: [
    ReportComponent
  ],
})
export class ReportDashboardModule { }
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/