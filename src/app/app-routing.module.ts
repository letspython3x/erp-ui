import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsComponent } from './modules/accounts/accounts.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QuotationAddComponent } from './modules/quotation/quotation-add/quotation-add.component';
import { QuotationDetailsComponent } from './modules/quotation/quotation-details/quotation-details.component';
import { TradersComponent } from './modules/trader/traders/traders.component';
import { TraderAddComponent } from './modules/trader/trader-add/trader-add.component';
import { TraderEditComponent } from './modules/trader/trader-edit/trader-edit.component';
import { TraderDetailsComponent } from './modules/trader/trader-details/trader-details.component';

import { ReportComponent } from './modules/report/report.component';

// import { HomeComponent } from '../app/home/home.component';
// import { LoginComponent } from '../app/login/login.component';
// import { RegisterComponent } from '../app/register/register.component';
// import { AuthGuard } from '../app/_guards/auth.gaurd';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  // { path: 'register', component: RegisterComponent, data: { title: 'User Registration' } },
  // // otherwise redirect to home
  // { path: '**', redirectTo: '' },

  // {path:  'auth', loadChildren:  './auth/auth.module#AuthModule'}, // PATH -> /auth/register and /auth/login routes.
  { path: 'accounts', component: AccountsComponent, data: { title: 'Accounts' } },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'product', loadChildren: './modules/product/product.module#ProductDashboardModule' },
  { path: 'customer', loadChildren: './modules/customer/customer.module#CustomerDashboardModule' },
  { path: 'category', loadChildren: './modules/category/category.module#CategoryDashboardModule' },
  { path: 'store', loadChildren: './modules/store/store.module#StoreDashboardModule' },

  { path: 'quotation-add', component: QuotationAddComponent },
  { path: 'quotation-details', component: QuotationDetailsComponent },
  { path: 'traders', component: TradersComponent, data: { title: 'Traders' } },
  { path: 'trader-add', component: TraderAddComponent },
  { path: 'trader-edit', component: TraderEditComponent, data: { title: 'Edit Trader' } },
  { path: 'trader-details', component: TraderDetailsComponent },

  { path: 'reports', component: ReportComponent, data: { title: 'Reports' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
