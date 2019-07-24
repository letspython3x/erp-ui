import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TradersComponent } from "./traders/traders.component";
import { TraderAddComponent } from "./trader-add/trader-add.component";
import { TraderEditComponent } from "./trader-edit/trader-edit.component";
import { TraderDetailsComponent } from "./trader-details/trader-details.component";

const routes: Routes = [
    { path: '', component: TradersComponent },
    { path: 'add', component: TraderAddComponent },
    { path: 'edit', component: TraderEditComponent },
    { path: 'details', component: TraderDetailsComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TraderRoutingModule {}