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
  store_id: number;
  name: string;
  address: string;
  country: string;
  storeDetailForm: FormGroup;

  constructor(private api: StoreService, private formBuilder: FormBuilder) {
    this.storeDetailForm = this.formBuilder.group({
      store_id: new FormControl(),
    });
  }


  onFormSubmit(storeDetailForm: any) {
    this.store_id = storeDetailForm.store_id;    
    console.log(`Fetching product data for ${this.store_id}`);
    this.api.getStore(this.store_id).
      subscribe(data => {
        if (data) {
          console.log(data);
          this.store = data['data']['store'];
        }
        else {
          this.store = null;
        }
      });
  }
}
