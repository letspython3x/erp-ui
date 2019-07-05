import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './modules/product/products/products.component';
import { ProductDetailComponent } from './modules/product/product-detail/product-detail.component';
import { ProductAddComponent } from './modules/product/product-add/product-add.component';
import { ProductEditComponent } from './modules/product/product-edit/product-edit.component';
import { QuotationAddComponent } from './modules/quotation/quotation-add/quotation-add.component';
import { QuotationDetailsComponent } from './modules/quotation/quotation-details/quotation-details.component';
import { CustomerAddComponent } from './modules/customer/customer-add/customer-add.component';
import { CustomerDetailComponent } from './modules/customer/customer-detail/customer-detail.component';
import { CustomersComponent } from './modules/customer/customers/customers.component';
import { CustomerEditComponent } from './modules/customer/customer-edit/customer-edit.component';

import { StoresComponent } from './modules/store/stores/stores.component';
import { StoreAddComponent } from './modules/store/store-add/store-add.component';
import { StoreEditComponent } from './modules/store/store-edit/store-edit.component';
import { StoreDetailsComponent } from './modules/store/store-details/store-details.component';

import { TradersComponent } from './modules/trader/traders/traders.component';
import { TraderAddComponent } from './modules/trader/trader-add/trader-add.component';
import { TraderEditComponent } from './modules/trader/trader-edit/trader-edit.component';
import { TraderDetailsComponent } from './modules/trader/trader-details/trader-details.component';

import { ReportComponent} from './modules/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-details', component: ProductDetailComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'product-edit', component: ProductEditComponent },
  { path: 'quotation-add', component: QuotationAddComponent },
  { path: 'quotation-details', component: QuotationDetailsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customer-details', component: CustomerDetailComponent },
  { path: 'customer-add', component: CustomerAddComponent },
  { path: 'customer-edit', component: CustomerEditComponent, data: { title: 'Edit Customer' } },

  { path: 'stores', component: StoresComponent },  
  { path: 'store-add', component: StoreAddComponent },
  { path: 'store-edit', component: StoreEditComponent, data: { title: 'Edit Store' } },
  { path: 'store-details', component: StoreDetailsComponent},


  { path: 'traders', component: TradersComponent, data: { title: 'Traders' } },
  { path: 'trader-add', component: TraderAddComponent },
  { path: 'trader-edit', component: TraderEditComponent, data: { title: 'Edit Trader' } },
  { path: 'trader-details', component: TraderDetailsComponent},
  
  { path: 'reports', component: ReportComponent, data: { title: 'Reports' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
