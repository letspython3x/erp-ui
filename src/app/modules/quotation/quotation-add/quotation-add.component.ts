import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { QuotationService } from '../quotation.service';

@Component({
  selector: 'app-quotation-add',
  templateUrl: './quotation-add.component.html',
  styleUrls: ['./quotation-add.component.scss']
})
export class QuotationAddComponent implements OnInit {
  quotationForm: FormGroup;
  products: FormArray;

  customer_id: string;
  product_name: string;
  product_sale_price: number;
  quantity: string;
  category: string;
  sub_total: number;
  total: number;

  constructor(private api: QuotationService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.quotationForm = this.formBuilder.group({
      customer_id: '',
      products: this.formBuilder.array([this.createProductRow()]),
      total: 0
    });
  }

  createProductRow(): FormGroup {
    return this.formBuilder.group({
      name: '',
      category: '',
      quantity: 0,
      quoted_price: 0,
      discount: 0,
      sub_total: 0
    });
  }

  addProductRow(): void {
    console.log('Add a new row');
    (<FormArray>this.quotationForm.get('products')).push(this.createProductRow());
  }

  onFormSubmit() {
    // this.isLoadingResults = true;
    console.log("Sending request to add the quotation");
    console.log(this.quotationForm);
    this.customer_id = this.quotationForm.controls.customer_id.value;
    this.products = this.quotationForm.controls.products.value;
    let json_quotationForm = JSON.stringify(this.quotationForm.value);
    console.log(json_quotationForm);

    this.api.addQuotation(json_quotationForm)
      .subscribe(res => {
        let quotation_id = res['quotation_id'];
        alert(`Quotation Saved: ${quotation_id}`);
        console.log("Quotation ID: " + quotation_id);
      }, (err) => {
        console.log(err);
      });
  }
  calculateSubTotal(row) {
    let sub_total = 0;
    if (row) {
      let discount = row.controls.discount.value;
      let quantity = row.controls.quantity.value;
      let quoted_price = row.controls.quoted_price.value;;
      sub_total = quantity * quoted_price * (1 - discount * 0.01);
    }
    console.log('Row Sub Total: ' + sub_total);
    return sub_total;
  }

  calculateTotal(products) {
    let total = 0;
    if (products) {
      products.forEach(product => {
        let discount = product['discount']
        let sub_total = product['quantity'] * product['quoted_price']
        total = total + sub_total - sub_total * discount * 0.01
      });
      console.log('Quotation Total: ' + total);
    }
    return total;
  }
}
