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
      contact_title: new FormControl(),
      gender: new FormControl(),
      membership: new FormControl(),
      primary_phone: new FormControl(),
      secondary_phone: new FormControl(),
      fax: new FormControl(),
      email: new FormControl(),
      country: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      postal_code: new FormControl(),
      contact_via_email: new FormControl(),
      contact_via_primary_phone: new FormControl(),
      contact_via_secondary_phone: new FormControl(),
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
        this.customerForm.reset();
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}