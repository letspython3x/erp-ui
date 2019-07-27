import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import the new component
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientsComponent } from './clients/clients.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client-routing.module';
import { ClientDetailComponent } from './client-detail/client-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    ReactiveFormsModule,
    ClientRoutingModule
  ],
  declarations: [
    ClientAddComponent,
    ClientEditComponent,
    ClientsComponent,
    ClientDetailComponent
  ],
})
export class ClientDashboardModule { 

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/