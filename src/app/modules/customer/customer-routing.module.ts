import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomersComponent } from "./customers/customers.component";
import { CustomerAddComponent } from "./customer-add/customer-add.component";
import { CustomerEditComponent } from "./customer-edit/customer-edit.component";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";

const routes: Routes = [
    { path: '', component: CustomersComponent },
    { path: 'add', component: CustomerAddComponent },
    { path: 'edit', component: CustomerEditComponent },
    { path: 'details', component: CustomerDetailComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }