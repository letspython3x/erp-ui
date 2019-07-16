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
  quotationList: any;
  quotationByIdForm: FormGroup;
  quotationByEntityForm: FormGroup;

  constructor(private api: QuotationService, private formBuilder: FormBuilder) {
    this.quotationByIdForm = this.formBuilder.group({
      quotation_id: new FormControl(Validators.required)
    });
    this.quotationByEntityForm = this.formBuilder.group({
      customer_id: new FormControl(),
      employee_id: new FormControl(),
      store_id: new FormControl(),
      quotation_type: new FormControl(),
      start_date: new FormControl(),
      end_date: new FormControl()
    });
  }

  onQidFormSubmit(quotationByIdForm: any) {
    let qid = quotationByIdForm.quotation_id;
    console.log(`Fetching quotation data for ${qid}`);
    if (qid) {
      this.api.getQuotation(qid).
        subscribe(res => {
          if (res) {
            console.log(res);
            this.quotation = res["data"][0];
            this.products = res["data"].slice(1);
            console.log(this.quotation);
            console.log(this.products);
          } else {
            this.quotation = null;
          }
        });
    }
  }
  onQbeFormSubmit(quotationByEntityForm: any) {
    let apiUrl = this.constructApiUrl(quotationByEntityForm);
    console.log(`Fetching quotation data by URL ${apiUrl}`);
    this.api.getQuotations(apiUrl).
      subscribe(res => {
        if (res) {
          console.log(res);
          this.quotationList = res["data"];
          console.log(this.quotationList);
        } else {
          this.quotationList = null;
        }
      });
  }
  constructApiUrl(quotationByEntityForm: any) {
    let cid = quotationByEntityForm.customer_id;
    let eid = quotationByEntityForm.employee_id;
    let sid = quotationByEntityForm.store_id;
    let quotation_type = quotationByEntityForm.quotation_type;
    let start_date = quotationByEntityForm.start_date;
    let end_date = quotationByEntityForm.end_date;
    let apiUrl = '';

    if (cid) {
      apiUrl = `?customer_id=${cid}`;
    }
    else if (eid) {
      apiUrl = `?employee_id=${eid}`;
    }
    else if (sid) {
      apiUrl = `?store_id=${sid}`;
    }

    if (quotation_type) { apiUrl += `&quotation_type=${quotation_type}`; }
    if (start_date) { apiUrl += `&start_date=${start_date}`; }
    if (end_date) { apiUrl += `&end_date=${end_date}`; }

    return apiUrl;
  }
}
