import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  searchProductForm: FormGroup;
  updateProductForm: FormGroup;

  isLoadingResults = false;
  product: any;
  product_id: number;
  updated_at: Date = null;

  constructor(private formBuilder: FormBuilder,
    private api: ProductService) {
    this.searchProductForm = this.formBuilder.group({
      product_id: new FormControl(),
      product_name: new FormControl(),
      serial_no: new FormControl(),
    })

    this.updateProductForm = this.formBuilder.group({
      product_name: new FormControl(),
      serial_no: new FormControl(),
      store_id: new FormControl(),
      category_name: new FormControl(),
      sub_category: new FormControl(),
      membership: new FormControl(),
      description: new FormControl(),
      supplier_id: new FormControl(),
      unit_price: new FormControl(),
      sell_price: new FormControl(),
      units_in_stock: new FormControl(),
      is_active: new FormControl(),
    })
    
  }

  onSearchFormSubmit(form: any) {
    let product_id = form.product_id;
    let product_name = form.product_name;
    let serial_no = form.serial_no;
    this.isLoadingResults = false;
    this.api.getProduct(product_id, serial_no, product_name).subscribe(res => {
      console.log(`Searching product ID: ${product_id} SERIAL: ${serial_no} NAME:${product_name} `);
      this.product = res[0];
      this.product_id = this.product.product_id;
      console.log(this.product);
      this.isLoadingResults = true;
      this.searchProductForm.reset();
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
  onUpdateFormSubmit(form: any) {
    alert('Updating Product...');
    console.log(form);
    let product = form.value;    
    this.api.updateProduct(product);
    console.log(form);
    this.updateProductForm.reset();
  }


  onDelete() {
    alert(`Deleting Product: ${this.product_id}`);
    this.api.deleteProduct(this.product_id).subscribe(data => {
      let res = data;
      console.log(`DELETE ${res}`);
      console.log("DELETE success");
    });
  }
}
