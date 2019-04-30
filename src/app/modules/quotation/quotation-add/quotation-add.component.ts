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
      customer_id:'',
      products: this.formBuilder.array([this.createProductRow()])
    });
  }

  createProductRow(): FormGroup {    
    return this.formBuilder.group({
      name: '',
      category: '',
      quantity: 0,
      price: 0,
      discount: 0,
      sub_total: 0
    });
  }

  addProduct(): void {
    console.log('Add a new row');
    (<FormArray>this.quotationForm.get('products')).push(this.createProductRow());  
  }

  onFormSubmit() {
    // this.isLoadingResults = true;
    console.log("Sending request to add the quotation");
    console.log(this.quotationForm);
    this.customer_id = this.quotationForm.controls.customer_id.value;

    this.api.addQuotation(this.quotationForm)
      .subscribe(res => {
        let quotation_id = res['quotation_id'];
        alert(`Quotation Saved: ${quotation_id}`);
        console.log("Quotation ID: " + quotation_id);
      }, (err) => {
        console.log(err);
      });
  }
}
