import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../../../shared/models/product.model';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'product-update-quantity',
  templateUrl: './product-update-quantity.component.html',
  styleUrls: ['./product-update-quantity.component.scss']
})
export class ProductUpdateQuantityComponent {
  product_id: number;
  quantity: number;  
  updateProductQuantityForm: FormGroup;

  constructor(private api: ProductService, private formBuilder: FormBuilder) {
    this.updateProductQuantityForm = this.formBuilder.group({
      product_id: new FormControl(),
      quantity: new FormControl()
    });
  }
  
  onFormSubmit(form: any) {
    alert('Updating Product Quantity...');
    console.log(form);
    let product = form;
    this.api.updateProductQuantity(product).subscribe(res => {
      console.log(res);
    });
    this.updateProductQuantityForm.reset();
  }

}
