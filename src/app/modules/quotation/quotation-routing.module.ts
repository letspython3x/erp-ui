import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuotationAddComponent } from './quotation-add/quotation-add.component';
import { QuotationsComponent } from './quotations/quotations.component';

const routes: Routes = [
    { path: '', component: QuotationsComponent },
    { path: 'add', component: QuotationAddComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuotationRoutingModule { }