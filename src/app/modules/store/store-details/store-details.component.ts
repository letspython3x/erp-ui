import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent {
  store:any;
  // store_name: string = '';
  // category_id: string = '';
  // store_admin: string = '';
  // address: string = '';
  // phone: string = '';
  // city: string = '';
  // country: string = '';
  // postal_code: string = '';
  storeDetailForm: FormGroup;

  constructor(private api: StoreService, private formBuilder: FormBuilder) {
    this.storeDetailForm = this.formBuilder.group({
      store_id: new FormControl(),
      store_name: new FormControl(),
    });
  }

  onFormSubmit(storeDetailForm: any) {
    let store_id = storeDetailForm.store_id;    
    console.log(`Fetching product data for ${store_id}`);
    this.api.getStore(store_id).
      subscribe(res => {
        if (res) {
          console.log(res);
          this.store = res[0];
        }
        else {
          this.store = null;
        }
      });
  }
}
