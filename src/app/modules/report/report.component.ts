import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  revenue: number = 0;
  customer_count: number = 0;
  orders_count: number = 0;
  products_count: number = 0;
  isLoadingResults: Boolean = false;

  accounts_overdue = [{
    'account_name': 'Account 1',
    'credit_limit': '$1000',
    'invoices': '$500',
    'balance': '$250',
    'last_payment_date': 'July 21, 2019',
  },
  {
    'account_name': 'Account 1',
    'credit_limit': '$1000',
    'invoices': '$500',
    'balance': '$250',
    'last_payment_date': 'Mar 21, 2019',
  },
  {
    'account_name': 'Account 1',
    'credit_limit': '$1000',
    'invoices': '$500',
    'balance': '$250',
    'last_payment_date': 'Apr 21, 2019',
  }]

  constructor(private api: ReportService) { }

  ngOnInit() {
    this.api.getReport()
      .subscribe(res => {
        console.log(res);
        this.revenue = res['revenue'];
        this.customer_count = res['customers'];
        this.orders_count = res['orders'];
        this.products_count = res['products'];
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}
