import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TraderService } from '../trader.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-trader-add',
  templateUrl: './trader-add.component.html',
  styleUrls: ['./trader-add.component.scss']
})
export class TraderAddComponent {
  traderForm: FormGroup;
  name: string = '';
  country: string = '';
  category: string = '';
  address: string = '';
  isLoadingResults = true;

  constructor(private router: Router, private api: TraderService,
    private formBuilder: FormBuilder) {
    this.traderForm = this.formBuilder.group({
      name: new FormControl(),
      country: new FormControl(),
      address: new FormControl(),
      category: new FormControl(),
    });
  }

  onFormSubmit(traderForm: any) {
    console.log("Sending request to add the Store");
    console.log(traderForm);
    this.name = traderForm.name;
    this.category = traderForm.category;
    this.country = traderForm.country;
    this.address = traderForm.address;
    console.log('name' + this.name);

    this.api.addTrader(traderForm)
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

