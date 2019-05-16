import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { TraderAddComponent } from './trader-add/trader-add.component';
import { TraderDetailsComponent } from './trader-details/trader-details.component';
import { TraderEditComponent } from './trader-edit/trader-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ProgressbarComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    CarouselComponent,
    TabsComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductEditComponent,
    QuotationAddComponent,
    QuotationDetailsComponent,
    CustomerAddComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
    CustomersComponent,
    StoresComponent,
    StoreAddComponent,
    StoreEditComponent,
    TradersComponent,
    TraderAddComponent,
    TraderDetailsComponent,
    TraderEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }