import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  productForm: FormGroup;
  product_name: string = '';
  serial_no: string = '';
  store_id:number;
  category_name: string = '';
  sub_category: string = '';
  description: string = '';
  supplier_id: string = '';
  unit_price: number = 0;
  sell_price: number = 0;
  units_in_stock: number = 0;
  is_active: number = 0;
  updated_at: Date = null;
  isLoadingResults = false;

  constructor(private router: Router, private api: ProductService,
    private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      product_name: new FormControl(),
      serial_no: new FormControl(),      
      category_name: new FormControl(),
      sub_category: new FormControl(),
      description: new FormControl(),
      store_id: new FormControl(),
      unit_price: new FormControl(),
      sell_price: new FormControl(),
      units_in_stock: new FormControl(),      
      supplier_id: new FormControl(),      
      is_active: new FormControl(),
      membership: new FormControl(),
    });
  }

  onFormSubmit(productForm: any) {
    // this.isLoadingResults = true;
    console.log("Sending request to add the product");
    console.log(productForm);
    this.product_name = productForm.product_name;
    this.serial_no = productForm.serial_no;
    this.store_id = productForm.store_id;
    this.description = productForm.description;
    this.category_name = productForm.category_name;
    this.sub_category = productForm.sub_category;
    this.supplier_id = productForm.supplier_id;
    this.unit_price = productForm.unit_price;
    this.sell_price = productForm.sell_price;
    this.units_in_stock = productForm.units_in_stock;
    this.is_active = productForm.is_active;

    console.log('name' + this.product_name);


    this.api.addProduct(productForm)
      .subscribe(res => {
        let product_id = res['product_id'];
        alert(`Product Saved: ${product_id}`);
        console.log("Product ID: " + product_id);
        this.isLoadingResults = false;
        // this.router.navigate(['/product-details', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
