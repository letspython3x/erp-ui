import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ICustomer } from '../../../shared/models/customer.model';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent {
  customer_id: number;
  email: string;
  phone: string;
  customer: ICustomer;
  customerDetailForm: FormGroup;

  constructor(private api: CustomerService, private formBuilder: FormBuilder) {
    this.customerDetailForm = this.formBuilder.group({
      customer_id: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
    });
  }

  onFormSubmit(customerDetailForm: any) {
    this.customer_id = customerDetailForm.customer_id;
    this.email = customerDetailForm.email;
    this.phone = customerDetailForm.phone;

    console.log(`Fetching product data for ${this.customer_id} ${this.phone}`);
    this.api.getCustomer(this.customer_id, this.phone, this.email).
      subscribe(data => {
        if (data) {
          console.log(data);
          this.customer = data;
        }
        else {
          this.customer = null;
        }
      });
  }


  // onFormSubmit(customerDetailForm: any) {
  //   this.customer_id = customerDetailForm.customer_id;
  //   this.email = customerDetailForm.email;
  //   this.phone = customerDetailForm.phone;

  //   console.log(`Fetching product data for ${this.customer_id} ${this.phone}`);
  //   if (this.customer_id) {
  //     this.api.getCustomer(this.customer_id).
  //       subscribe(data => {
  //         if (data) {
  //           this.customer = data;
  //         }
  //         else {
  //           this.customer = null;
  //         }
  //       });
  //   }
  //   else if (this.email) {
  //     this.api.getCustomer(this.email).
  //       subscribe(data => {
  //         if (data) {
  //           this.customer = data
  //         } else {
  //           this.customer = null;
  //         }
  //       });
  //   }
  //   else if (this.phone) {
  //     this.api.getCustomer(this.phone).
  //       subscribe(data => {
  //         if (data) {
  //           this.customer = data
  //         } else {
  //           this.customer = null;
  //         }
  //       });
  //   }
  // }
}
