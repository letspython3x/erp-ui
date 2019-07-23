import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import the new component
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreAddComponent } from './store-add/store-add.component';
import { StoreEditComponent } from './store-edit/store-edit.component';
import { StoresComponent } from './stores/stores.component';
import { StoreRoutingModule } from './store-routing.module';
import { StoreDetailsComponent } from './store-details/store-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StoreRoutingModule
    ],
    declarations: [
        StoreAddComponent,
        StoreEditComponent,
        StoresComponent,
        StoreDetailsComponent,
    ]
})
export class StoreDashboardModule {

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/