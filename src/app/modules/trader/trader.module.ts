import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import the new component
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TradersComponent } from "./traders/traders.component";
import { TraderAddComponent } from "./trader-add/trader-add.component";
import { TraderEditComponent } from "./trader-edit/trader-edit.component";
import { TraderDetailsComponent } from "./trader-details/trader-details.component";
import { TraderRoutingModule } from './trader-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TraderRoutingModule
    ],
    declarations: [
        TraderAddComponent,
        TraderEditComponent,
        TradersComponent,
        TraderDetailsComponent,
    ]
})
export class TraderDashboardModule {

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/