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
