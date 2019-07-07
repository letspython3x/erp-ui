import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { QuotationService } from '../quotation.service';

@Component({
  selector: 'app-quotation-add',
  templateUrl: './quotation-add.component.html',
  styleUrls: ['./quotation-add.component.scss']
})
export class QuotationAddComponent implements OnInit {
  quotation_form_group: FormGroup;
  products: FormArray;
  total_row: number;
  customer_id: string;
  product_name: string;
  product_sale_price: number;
  quantity: string;
  category: string;
  sub_total: number;
  total: number;

  constructor(private api: QuotationService,
    private _fb: FormBuilder) { }

  ngOnInit() {
    this.quotation_form_group = this._fb.group({
      customer_id: '',
      type: '',
      discount_on_total: 0,
      tax_on_total: 0,
      discounted_sub_total: new FormControl({ value: 0, disabled: true }, Validators.required),
      total: new FormControl({ value: 0, disabled: true }, Validators.required),
      item_rows: this._fb.array([this.initItemRow()])
    });
  }

  initItemRow(): FormGroup {
    return this._fb.group({
      product_name: '',
      category: '',
      quantity: 0,
      quoted_price: 0,
      item_discount: 0,
      tax: 0,
      line_item_total: new FormControl({ value: 0, disabled: true }, Validators.required),
    });
  }

  addNewRow() {
    console.log('Add a new row');
    const control = <FormArray>this.quotation_form_group.controls['item_rows'];
    control.push(this.initItemRow());
  }

  deleteRow(index: number) {
    const control = <FormArray>this.quotation_form_group.controls['item_rows'];
    if (control != null) {
      this.total_row = control.value.length;
    }
    if (this.total_row > 1) {
      control.removeAt(index);
    } else {
      alert('Atleast one line item is mandatory');
      return false;
    }
  }

  onFormSubmit() {
    // this.isLoadingResults = true;
    console.log("Sending request to add the quotation");
    console.log(this.quotation_form_group);
    this.customer_id = this.quotation_form_group.controls.customer_id.value;
    this.products = this.quotation_form_group.controls.products.value;
    let json_quotationForm = JSON.stringify(this.quotation_form_group.value);
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

  calculateLineItemSubTotal(item) {
    let total = 0;
    if (item) {
      let discount = item.controls.item_discount.value;
      let quantity = item.controls.quantity.value;
      let quoted_price = item.controls.quoted_price.value;;
      let tax = item.controls.tax.value;
      total = quoted_price * quantity * (1 - discount * 0.01);
      total = total * (1 + tax * 0.01);
    }
    console.log('Line Item Total: ' + total);
    return total;

  }

  calculateSubTotal(item_rows) {
    let sub_total = 0;
    if (item_rows) {
      item_rows.forEach(row => {        
        // sub_total += row.controls.line_item_total.value;
        sub_total += this.calculateLineItemSubTotal(row);
        console.log('Row Sub Total: ' + sub_total);
        // console.log(row);
      });
      return sub_total;
    }
  }

  calculateTotal(item_rows) {
    let sub_total = 0;
    let discount_on_total = this.quotation_form_group.controls.discount_on_total.value;
    let tax_on_total = this.quotation_form_group.controls.tax_on_total.value;
    let total = 0;
    if (item_rows) {
      item_rows.forEach(row => {
        sub_total += this.calculateLineItemSubTotal(row);
        // sub_total += row.controls.line_item_total.value;
        console.log('TOTAL ROW SUB Total: ' + sub_total);
      });
    }
    total = sub_total * (1 - discount_on_total * 0.01);
    total = total * (1 + tax_on_total * 0.01);

    console.log('Quotation Total: ' + total);
    return total;
  }
}
