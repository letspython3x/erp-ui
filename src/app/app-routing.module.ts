import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

// import { HomeComponent } from '../app/home/home.component';
// import { LoginComponent } from '../app/login/login.component';
// import { RegisterComponent } from '../app/register/register.component';
// import { AuthGuard } from '../app/_guards/auth.gaurd';


const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  // { path: 'register', component: RegisterComponent, data: { title: 'User Registration' } },
  // // otherwise redirect to home
  // { path: '**', redirectTo: '' },
  // {path:  'auth', loadChildren:  './auth/auth.module#AuthModule'}, // PATH -> /auth/register and /auth/login routes.

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'accounts', loadChildren: './modules/accounts/accounts.module#AccountsDashboardModule' },
  { path: 'category', loadChildren: './modules/category/category.module#CategoryDashboardModule' },
  { path: 'client', loadChildren: './modules/client/client.module#ClientDashboardModule' },
  { path: 'product', loadChildren: './modules/product/product.module#ProductDashboardModule' },
  { path: 'order', loadChildren: './modules/order/order.module#OrderDashboardModule' },
  { path: 'report', loadChildren: './modules/report/report.module#ReportDashboardModule' },
  { path: 'store', loadChildren: './modules/store/store.module#StoreDashboardModule' },
  { path: 'trader', loadChildren: './modules/trader/trader.module#TraderDashboardModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
