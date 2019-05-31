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
  name: string = '';
  serial_no: string = '';
  category: string = '';
  sub_category: string = '';
  membership: string = '';
  description: string = '';
  distributor: string = '';
  cost_price: number = 0;
  sell_price: number = 0;
  quantity: number = 0;
  is_active: number = 0;
  store_id: number;
  updated_at: Date = null;

  constructor(private formBuilder: FormBuilder,
    private api: ProductService) {
    this.searchProductForm = this.formBuilder.group({
      id: new FormControl(),
      name: new FormControl(),
      serial_no: new FormControl(),
    })
    this.updateProductForm = this.formBuilder.group({
      name: new FormControl(),
      serial_no: new FormControl(),
      store_id: new FormControl(),
      category: new FormControl(),
      sub_category: new FormControl(),
      membership: new FormControl(),
      description: new FormControl(),
      distributor: new FormControl(),
      cost_price: new FormControl(),
      sell_price: new FormControl(),
      quantity: new FormControl(),
      is_active: new FormControl(),
    })
  }

  onSearchFormSubmit(form: any) {
    alert('Searching...');
    console.log(form);
    let id = form.id;
    let name = form.name;
    let serial_no = form.serial_no;
    this.isLoadingResults = true;
    this.api.getProduct(id, name, serial_no).subscribe(res => {
      console.log(res);
      // let customer_id = res['customer_id'];
      alert(`Product Fetched: ${res}`);
      // console.log("Customer ID: " + id);
      this.name = 'value';
      this.serial_no = 'value';
      this.category = 'value';
      this.sub_category = 'value';
      this.description = 'value';
      this.distributor = 'value';
      this.store_id = 0;
      this.cost_price = 0;
      this.sell_price = 0;
      this.quantity = 0;
      this.is_active = 0;
      this.isLoadingResults = true;
      // this.router.navigate(['/product-details', id]);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });;
  }
  onUpdateFormSubmit(form: any) {
    alert('Updating...');
    // this.api.updateProduct();
    console.log(form);
  }


}
