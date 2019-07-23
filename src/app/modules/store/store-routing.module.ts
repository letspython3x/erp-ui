import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StoresComponent } from "./stores/stores.component";
import { StoreAddComponent } from "./store-add/store-add.component";
import { StoreEditComponent } from "./store-edit/store-edit.component";
import { StoreDetailsComponent } from "./store-details/store-details.component";

const routes: Routes = [
    { path: '', component: StoresComponent },
    { path: 'add', component: StoreAddComponent },
    { path: 'edit', component: StoreEditComponent },
    { path: 'details', component: StoreDetailsComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule {}