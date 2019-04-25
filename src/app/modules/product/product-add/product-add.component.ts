import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  name: string = '';
  description: string = '';
  disributor: string = '';
  cost_price: number = 0;
  sell_price: number = 0;
  quantity: number = 0;
  is_active: number = 0;
  updated_at: Date = null;
  isLoadingResults = false;

  constructor(private router: Router, private api: ProductService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'description': [null, Validators.required],
      'disributor': [null, Validators.required],
      'cost_price': [null, Validators.required],
      'sell_price': [null, Validators.required],
      'quantity': [null, Validators.required],
      'is_active': [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addProduct(form)
      .subscribe(res => {
        let id = res['id'];
        console.log("Logging the form");
        console.log(form);
        this.isLoadingResults = false;
        this.router.navigate(['/product-details', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
