import { Component, OnInit } from '@angular/core';
import { QuotationService } from '../quotation.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Htmltopdf } from '../../../shared/html_to_pdf';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss']
})
export class QuotationsComponent {
  quotation: any;
  quotation_id: number;
  store: any;
  customer: any;
  metadata: any;
  line_items: any;

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
    console.log(`Fetching quotation data for ID: ${qid}`);
    if (qid) {
      this.api.getQuotation(qid).
        subscribe(res => {
          if (res) {
            this.quotation = res["data"];
            this.metadata = this.quotation["metadata"];
            this.store = this.quotation["store"];
            this.customer = this.quotation["customer"];
            this.line_items = this.quotation["line_items"];
            this.quotation_id = this.metadata["order_id"];
            this.quotationByIdForm.reset();
            this.quotationList = null;
          } else {
            this.quotationList = null;
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
          this.quotationList = res["data"];
          this.quotationByEntityForm.reset();
          this.quotation = null;
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

  capture() {
    // this.createQuotationHtml();
    let obj = new Htmltopdf();
    obj.captureScreen("quotationPdf");
  }

  print(){
    console.log('Printing IN progress');
  }
}
