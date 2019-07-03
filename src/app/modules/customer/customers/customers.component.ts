import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[];
  customerList:any = [];
  isLoadingResults = true;

  constructor(private api: CustomerService) { }

  
  ngOnInit() {
    this.api.getCustomers()
      .subscribe(res => {
        this.customerList = res;
        console.log(this.customerList);
        console.log('hi');
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
