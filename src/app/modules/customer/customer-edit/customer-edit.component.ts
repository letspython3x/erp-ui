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
  membership: string;
  primary_phone: string;
  secondary_phone: string;
  email: string;
  address: string;
  postal_code: string;
  state: string;
  city: string;
  country: string;

  constructor(private formBuilder: FormBuilder,
    private api: CustomerService) {
    this.searchCustomerForm = this.formBuilder.group({
      customer_id: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
    })
    this.updateCustomerForm = this.formBuilder.group({
      first_name: new FormControl(),
      middle_name: new FormControl(),
      last_name: new FormControl(),
      gender: new FormControl(),
      category: new FormControl(),
      membership: new FormControl(),
      primary_phone: new FormControl(),
      secondary_phone: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      postal_code: new FormControl(),
      state: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
    })
  }

  onSearchFormSubmit(form: any) {
    alert('Searching...');
    console.log(form);
    let customer_id = form.customer_id;
    let phone = form.phone;
    let email = form.email;
    this.isLoadingResults = true;
    this.api.getCustomer(customer_id, phone, email).subscribe(res => {
      let customer = res[0];
      this.first_name=customer['first_name'];
      this.middle_name=customer['middle_name'];
      this.last_name=customer['last_name'];
      this.gender=customer['gender'];
      this.membership=customer['membership'];
      this.primary_phone=customer['primary_phone'];
      this.secondary_phone=customer['secondary_phone'];
      this.email=customer['email'];
      this.address=customer['address'];
      this.postal_code=customer['postal_code'];
      this.state=customer['state'];
      this.city=customer['city'];
      this.country=customer['country'];

      this.isLoadingResults = true;
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
