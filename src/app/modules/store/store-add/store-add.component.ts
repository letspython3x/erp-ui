import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.scss']
})
export class StoreAddComponent {
  storeForm: FormGroup;
  store_name: string = '';
  category_id: string = '';
  store_admin: string = '';
  address: string = '';
  phone: string = '';
  city: string = '';
  country: string = '';
  postal_code: string = '';
  isLoadingResults = true;

  constructor(private router: Router, private api: StoreService,
    private formBuilder: FormBuilder) {
    this.storeForm = this.formBuilder.group({
      store_name: new FormControl(),
      category_id: new FormControl(),
      store_admin: new FormControl(),
      address: new FormControl(),
      phone: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
      postal_code: new FormControl(),
    });
  }

  onFormSubmit(storeForm: any) {
    console.log("Sending request to add the Store");
    console.log(storeForm);
    this.store_name = storeForm.store_name;    
    this.category_id = storeForm.category_id;
    this.store_admin = storeForm.store_admin;
    this.address = storeForm.address;
    this.phone= storeForm.phone;
    this.city= storeForm.city;
    this.country= storeForm.country;
    this.postal_code= storeForm.postal_code;
    console.log('Store Name: ' + this.store_name);

    this.api.addStore(storeForm)
      .subscribe(res => {
        console.log(res)
        let store_id = res['store_id'];
        alert(`Store Saved: ${store_id}`);
        console.log("Store ID: " + store_id);
        this.isLoadingResults = false;
        // this.router.navigate(['/store-details', store_id]);
        this.storeForm.reset();
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
