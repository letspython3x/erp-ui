import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent {
  searchCustomerForm: FormGroup;
  updateCustomerForm: FormGroup;
  isLoadingResults = false;
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: string;
  category: string;
  dob: string;
  membership: string;
  home: string;
  work: string;
  mobile: string;
  email: string;
  address_1: string;
  address_2: string;
  postcode: string;
  state: string;
  city: string;
  country: string;

  constructor(private formBuilder: FormBuilder,
    private api: CustomerService) {
    this.searchCustomerForm = this.formBuilder.group({
      id: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
    })
    this.updateCustomerForm = this.formBuilder.group({
      first_name: new FormControl(),
      middle_name: new FormControl(),
      last_name: new FormControl(),
      gender: new FormControl(),
      category: new FormControl(),
      dob: new FormControl(),
      membership: new FormControl(),
      home: new FormControl(),
      work: new FormControl(),
      mobile: new FormControl(),
      email: new FormControl(),
      address_1: new FormControl(),
      address_2: new FormControl(),
      postcode: new FormControl(),
      state: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
    })
  }

  onSearchFormSubmit(form: any) {
    alert('Searching...');
    console.log(form);
    let id = form.id;
    let phone = form.phone;
    let email = form.email;
    this.isLoadingResults = true;
    this.api.getCustomer(id, phone, email).subscribe(res => {
      console.log(res);
      // let customer_id = res['customer_id'];
      alert(`Customer Fetched: ${res}`);
      // console.log("Customer ID: " + id);
      this.first_name='value';
      this.middle_name='value';
      this.last_name='value';
      this.gender='Female';
      this.category='Ad-Hoc';
      this.membership='value';
      this.home='value';
      this.work='value';
      this.mobile='value';
      this.email='value';
      this.address_1='value';
      this.address_2='value';
      this.postcode='value';
      this.state='value';
      this.city='value';
      this.country='value';

      this.isLoadingResults = true;
      // this.router.navigate(['/product-details', id]);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });;
  }
  onUpdateFormSubmit(form: any) {
    alert('Updating...');
    console.log(form);
  }
}
