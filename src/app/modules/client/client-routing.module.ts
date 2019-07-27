import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientsComponent } from "./clients/clients.component";
import { ClientAddComponent } from "./client-add/client-add.component";
import { ClientEditComponent } from "./client-edit/client-edit.component";
import { ClientDetailComponent } from "./client-detail/client-detail.component";

const routes: Routes = [
    { path: '', component: ClientsComponent },
    { path: 'add', component: ClientAddComponent },
    { path: 'edit', component: ClientEditComponent },
    { path: 'details', component: ClientDetailComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }