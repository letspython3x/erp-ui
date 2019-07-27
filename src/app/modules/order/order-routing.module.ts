import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderAddComponent } from './order-add/order-add.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
    { path: '', component: OrdersComponent },
    { path: 'add', component: OrderAddComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule { }