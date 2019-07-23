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
import { fakeBackendProvider } from '../app/_helpers/fake-backend';


//import { routing }        from './app.routing';

import { AlertComponent } from '../app/_components/alert.component';
import { ErrorInterceptor } from '../app/_helpers/error.interceptor';
import { JwtInterceptor } from '../app/_helpers/jwt.interceptor';
import { HomeComponent } from '../app/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProductDashboardModule } from './modules/product/product.module';
// import { ProductsComponent } from './modules/product/products/products.component';
// import { ProductUpdateQuantityComponent } from './modules/product/product-update-quantity/product-update-quantity.component';
// import { ProductAddComponent } from './modules/product/product-add/product-add.component';
// import { ProductEditComponent } from './modules/product/product-edit/product-edit.component';


import { QuotationAddComponent } from './modules/quotation/quotation-add/quotation-add.component';
import { QuotationDetailsComponent } from './modules/quotation/quotation-details/quotation-details.component';

// import { CustomerAddComponent } from './modules/customer/customer-add/customer-add.component';
// import { CustomerDetailComponent } from './modules/customer/customer-detail/customer-detail.component';
// import { CustomersComponent } from './modules/customer/customers/customers.component';
// import { CustomerEditComponent } from './modules/customer/customer-edit/customer-edit.component';

import { StoresComponent } from './modules/store/stores/stores.component';
import { StoreAddComponent } from './modules/store/store-add/store-add.component';
import { StoreEditComponent } from './modules/store/store-edit/store-edit.component';

import { TradersComponent } from './modules/trader/traders/traders.component';
import { TraderAddComponent } from './modules/trader/trader-add/trader-add.component';
import { TraderEditComponent } from './modules/trader/trader-edit/trader-edit.component';
import { TraderDetailsComponent } from './modules/trader/trader-details/trader-details.component';

import { StoreDetailsComponent } from './modules/store/store-details/store-details.component';
import { ReportComponent } from './modules/report/report.component';
import { AccountsComponent } from './modules/accounts/accounts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './modules/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    QuotationAddComponent,
    QuotationDetailsComponent,
    TradersComponent,
    TraderAddComponent,
    TraderDetailsComponent,
    TraderEditComponent,
    ReportComponent,
    AccountsComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    //routing,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    // ProductDashboardModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }