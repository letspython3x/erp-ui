import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { QuotationService } from '../quotation.service';
import { Htmltopdf } from '../../../shared/html_to_pdf';



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
  category_name: string;
  sub_total: number;
  total: number;
  line_items:any;
  quotation_submitted:boolean=false;
  isLoadingResults :boolean= true;

  constructor(private api: QuotationService,
    private _fb: FormBuilder) { }

  ngOnInit() {
    this.quotation_form_group = this._fb.group({
      customer_id: -999,
      employee_id: -999,
      store_id: -999,
      quotation_type: '',
      payment_type:'',
      discount_on_total: 0,
      total_tax: 0,
      discounted_sub_total: new FormControl({ value: 0, disabled: true }, Validators.required),
      quotation_total: new FormControl({ value: 0, disabled: true }, Validators.required),
      item_rows: this._fb.array([this.initItemRow()])
    });
  }

  initItemRow(): FormGroup {
    return this._fb.group({
      product_name: '',
      category_name: '',
      quantity: 0,
      quoted_price: 0,
      item_discount: 0,
      tax: new FormControl({ value: 7, disabled: true }, Validators.required),
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
    this.isLoadingResults = false;
    this.quotation_submitted = true;    
    console.log("Sending request to add the quotation");    
    this.line_items = this.quotation_form_group.controls.item_rows;
    console.log(this.line_items);
    
    let formObj = this.quotation_form_group.getRawValue();
    let serializedForm = JSON.stringify(formObj);
    console.log(serializedForm);
    //console.log(this.quotation_form_group);
    
    //let json_quotationForm = JSON.stringify(this.quotation_form_group.value);
    //console.log(json_quotationForm);

    this.api.addQuotation(serializedForm)
      .subscribe(res => {
        console.log(res);
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
      total = quoted_price * quantity * (1 - discount * 0.01);      
    }    
    return total;
  }

  calculateSubTotal(item_rows) {
    let sub_total = 0;
    if (item_rows) {
      item_rows.forEach(row => {        
        sub_total += this.calculateLineItemSubTotal(row);
      });
      return sub_total;
    }
  }

  calculateTotalTax(item_rows) {
    let total_tax = 0;
    if (item_rows) {
      item_rows.forEach(row => {
        let tax = row.controls.tax.value * 0.01;
        let line_total = this.calculateLineItemSubTotal(row);
        total_tax += tax * line_total;
      });      
      return total_tax;
    }
  }


  calculateTotal(item_rows) {
    let sub_total = 0;
    let discount_on_total = this.quotation_form_group.controls.discount_on_total.value;    
    let total = 0;
    if (item_rows) {
      item_rows.forEach(row => {
        sub_total += this.calculateLineItemSubTotal(row);        
      });
    }
    total = sub_total * (1 - discount_on_total * 0.01);
    let total_tax = this.calculateTotalTax(item_rows);
    total = total + total_tax;
    this.total = total;
    return total;
  }

  capture(){
    let obj = new Htmltopdf();
    obj.captureScreen();
    }
}
