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
  serial_no: string;
  product: IProduct;
  productDetailForm: FormGroup;

  constructor(private api: ProductService, private formBuilder: FormBuilder) {
    this.productDetailForm = this.formBuilder.group({
      product_id: new FormControl(),
      name: new FormControl(),
      serial_no: new FormControl(),
    });
  }


  onFormSubmit(productDetailForm: any) {
    this.product_id = productDetailForm.product_id;
    this.name = productDetailForm.name;
    this.serial_no = productDetailForm.serial_no;
    console.log(`Fetching product data for ${this.product_id} ${this.name}`);
    this.api.getProduct(this.product_id, this.serial_no , this.name ).
        subscribe(data => {
          if (data) {
            this.product = data;
          }
          else {
            this.product = null;
          }
        });

    // if (this.product_id) {
    //   this.api.getProduct(this.product_id, this.serial_no , this.name ).
    //     subscribe(data => {
    //       if (data) {
    //         this.product = data;
    //       }
    //       else {
    //         this.product = null;
    //       }
    //     });
    // }
    // else if (this.name) {
    //   this.api.getProduct(this.name).
    //     subscribe(data => {
    //       if (data) {
    //         this.product = data[0]
    //       } else {
    //         this.product = null;
    //       }
    //     });
    // }
    // else if (this.serial_no) {
    //   this.api.getProduct(this.serial_no).
    //     subscribe(data => {
    //       if (data) {
    //         this.product = data[0]
    //       } else {
    //         this.product = null;
    //       }
    //     });
    // }

  }

}
