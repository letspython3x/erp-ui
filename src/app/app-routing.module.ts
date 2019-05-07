import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
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

import { TradersComponent } from './modules/trader/traders/traders.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordions', component: AccordionsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'dropdowns', component: DropdownComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'tabs', component: TabsComponent },

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

  { path: 'traders', component: TradersComponent, data: { title: 'Traders' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
