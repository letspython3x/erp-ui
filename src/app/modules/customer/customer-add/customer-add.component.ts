import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent {
  customerForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: CustomerService,
    private formBuilder: FormBuilder) {
    this.customerForm = this.formBuilder.group({
      first_name: new FormControl(),
      middle_name: new FormControl(),
      last_name: new FormControl(),
      gender: new FormControl(),
      category: new FormControl(),
      dob: new FormControl(),
      membership: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      address_1: new FormControl(),
      address_2: new FormControl(),
      postcode: new FormControl(),
      state: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
    });
  }

  onFormSubmit(customerForm: any) {
    // this.isLoadingResults = true;
    console.log("Sending request to add the customer");
    console.log(customerForm);
    this.api.addCustomer(customerForm)
      .subscribe(res => {
        console.log(res);
        let customer_id = res['customer_id'];
        alert(`Customer Saved: ${customer_id}`);
        console.log("Customer ID: " + customer_id);
        this.isLoadingResults = false;
        // this.router.navigate(['/product-details', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}