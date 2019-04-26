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
  category: string = '';
  description: string = '';
  distributor: string = '';
  cost_price: number = 0;
  sell_price: number = 0;
  quantity: number = 0;
  is_active: number = 0;
  updated_at: Date = null;
  isLoadingResults = false;

  constructor(private router: Router, private api: ProductService,
    private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      name: new FormControl(),
      description: new FormControl(),
      category: new FormControl(),
      distributor: new FormControl(),
      cost_price: new FormControl(),
      sell_price: new FormControl(),
      quantity: new FormControl(),
      is_active: new FormControl(),
    });
  }

  onFormSubmit(productForm: any) {
    // this.isLoadingResults = true;
    console.log("Sending request to add the product");
    console.log(productForm);
    this.name = productForm.pname;
    this.description = productForm.description;
    this.category = productForm.category;
    this.distributor = productForm.distributor;
    this.cost_price = productForm.cost_price;
    this.sell_price = productForm.sell_price;
    this.quantity = productForm.quantity;
    this.is_active = productForm.is_active;

    console.log('name' + this.name);
    

    this.api.addProduct(productForm)
      .subscribe(res => {
        console.log("Logging the form");
        let id = res['id'];
        console.log("Product ID: " + id);
        this.isLoadingResults = false;
        // this.router.navigate(['/product-details', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  ngOnInit() {  }

  
}
