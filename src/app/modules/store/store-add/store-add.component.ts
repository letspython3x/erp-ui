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
  name: string = '';
  country: string = '';
  category: string = '';
  address: string = '';
  isLoadingResults = true;

  constructor(private router: Router, private api: StoreService,
    private formBuilder: FormBuilder) {
    this.storeForm = this.formBuilder.group({
      name: new FormControl(),
      country: new FormControl(),
      address: new FormControl(),
      category: new FormControl(),
    });
  }

  onFormSubmit(storeForm: any) {
    console.log("Sending request to add the Store");
    console.log(storeForm);
    this.name = storeForm.name;
    this.category = storeForm.category;
    this.country = storeForm.country;
    this.address = storeForm.address;
    console.log('name' + this.name);

    this.api.addStore(storeForm)
      .subscribe(res => {
        console.log(res)
        let store_id = res['store_id'];
        alert(`Store Saved: ${store_id}`);
        console.log("Store ID: " + store_id);
        this.isLoadingResults = false;
        // this.router.navigate(['/store-details', store_id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
