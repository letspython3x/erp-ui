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
  product_name: string = '';
  serial_no: string = '';
  category_id: string = '';
  sub_category: string = '';
  membership: string = '';
  description: string = '';
  supplier_id: string = '';
  unit_price: number = 0;
  sell_price: number = 0;
  units_in_stock: number = 0;
  is_active: number = 0;
  store_id: number;
  product_id: string;
  updated_at: Date = null;

  constructor(private formBuilder: FormBuilder,
    private api: ProductService) {
    this.searchProductForm = this.formBuilder.group({
      id: new FormControl(),
      name: new FormControl(),
      serial_no: new FormControl(),
    })
    this.updateProductForm = this.formBuilder.group({
      product_name: new FormControl(),
      serial_no: new FormControl(),
      store_id: new FormControl(),
      category_id: new FormControl(),
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
    // console.log(form);
    let id = form.id;
    let name = form.name;
    let serial_no = form.serial_no;
    this.isLoadingResults = false;
    this.api.getProduct(id, serial_no, name).subscribe(res => {
      console.log(res[0]);
      // alert(`Product Fetched: ${res}`);
      // console.log("product ID: " + id);
      this.product_name = res[0]['product_name'];
      this.serial_no = res[0]['serial_no'];
      this.category_id = res[0]['category_id'];
      this.description = res[0]['description'];
      this.supplier_id = res[0]['supplier_id'];
      this.store_id = res[0]['store_id'];
      this.unit_price = res[0]['unit_price'];
      this.sell_price = res[0]['sell_price'];
      this.units_in_stock = res[0]['units_in_stock'];
      this.is_active = res[0]['is_active'];
      this.isLoadingResults = true;
      this.product_id = res[0]['pk'].split("#")[1];
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
  onUpdateFormSubmit(form: any) {
    alert('Updating...');
    // this.api.updateProduct();
    console.log(form);
  }

  onDelete() {
    alert(`Deleting Product: ${this.product_id}`);
    this.api.deleteProduct(this.product_id).subscribe((data) => {
      console.log("success");
    });
  }
}
