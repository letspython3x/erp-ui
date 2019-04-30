import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../../../shared/models/product.model';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product_id: number;
  name: string;
  product: IProduct;
  productDetailForm: FormGroup;

  constructor(private api: ProductService, private formBuilder: FormBuilder) {
    this.productDetailForm = this.formBuilder.group({
      product_id: new FormControl(),
      name: new FormControl(),
    });
  }


  onFormSubmit(productDetailForm: any) {
    this.product_id = productDetailForm.product_id;
    this.name = productDetailForm.name;
    console.log(`Fetching Data for ${this.product_id} ${this.name}`);
    this.api.getProduct(this.product_id).
      subscribe(data => this.product = data);
  }

}
