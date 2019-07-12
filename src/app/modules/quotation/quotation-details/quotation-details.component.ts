import { Component, OnInit } from '@angular/core';
import { QuotationService } from '../quotation.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-quotation-details',
  templateUrl: './quotation-details.component.html',
  styleUrls: ['./quotation-details.component.scss']
})
export class QuotationDetailsComponent {
  quotation_id: number;
  quotation: any;
  products: any;
  quotationDetailForm: FormGroup;

  constructor(private api: QuotationService, private formBuilder: FormBuilder) {
    this.quotationDetailForm = this.formBuilder.group({
      quotation_type: new FormControl(),
      quotation_id: new FormControl(),
      customer_id: new FormControl(),
      quotation_date: new FormControl()
    });
  }

  onFormSubmit(quotationDetailForm: any) {
    let qid = quotationDetailForm.quotation_id;
    console.log(`Fetching quotation data for ${qid}`);
    if (qid) {
      this.api.getQuotation(qid).
        subscribe(data => {
          if (data) {
            console.log(data);
            this.quotation_id = data['quotation_id'];
            this.quotation = data['quotation'];
            console.log(this.quotation);
            this.products = this.quotation['products'];
            console.log(this.products);
          } else {
            this.quotation = null;
          }
        });
    }
  }

}
