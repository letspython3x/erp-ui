import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Htmltopdf } from '../../../shared/html_to_pdf';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  order: any;
  order_id: number;
  store: any;
  client: any;
  metadata: any;
  line_items: any;

  orderList: any;
  orderByIdForm: FormGroup;
  orderByEntityForm: FormGroup;

  constructor(private api: OrderService, private formBuilder: FormBuilder) {
    this.orderByIdForm = this.formBuilder.group({
      order_id: new FormControl(Validators.required)
    });
    this.orderByEntityForm = this.formBuilder.group({
      client_id: new FormControl(),
      employee_id: new FormControl(),
      store_id: new FormControl(),
      order_type: new FormControl(),
      start_date: new FormControl(),
      end_date: new FormControl()
    });
  }

  onQidFormSubmit(orderByIdForm: any) {
    let qid = orderByIdForm.order_id;
    console.log(`Fetching order data for ID: ${qid}`);
    if (qid) {
      this.api.getOrder(qid).
        subscribe(res => {
          if (res) {
            this.order = res["data"];
            this.metadata = this.order["metadata"];
            this.store = this.order["store"];
            this.client = this.order["client"];
            this.line_items = this.order["line_items"];
            this.order_id = this.metadata["order_id"];
            this.orderByIdForm.reset();
            this.orderList = null;
          } else {
            this.orderList = null;
            this.order = null;
          }
        });
    }
  }
  onQbeFormSubmit(orderByEntityForm: any) {
    let apiUrl = this.constructApiUrl(orderByEntityForm);
    console.log(`Fetching order data by URL ${apiUrl}`);
    this.api.getOrders(apiUrl).
      subscribe(res => {
        if (res) {
          this.orderList = res["data"];
          this.orderByEntityForm.reset();
          this.order = null;
        } else {
          this.orderList = null;
        }
      });
  }
  constructApiUrl(orderByEntityForm: any) {
    let cid = orderByEntityForm.client_id;
    let eid = orderByEntityForm.employee_id;
    let sid = orderByEntityForm.store_id;
    let order_type = orderByEntityForm.order_type;
    let start_date = orderByEntityForm.start_date;
    let end_date = orderByEntityForm.end_date;
    let apiUrl = '';

    if (cid) {
      apiUrl = `?client_id=${cid}`;
    }
    else if (eid) {
      apiUrl = `?employee_id=${eid}`;
    }
    else if (sid) {
      apiUrl = `?store_id=${sid}`;
    }

    if (order_type) { apiUrl += `&order_type=${order_type}`; }
    if (start_date) { apiUrl += `&start_date=${start_date}`; }
    if (end_date) { apiUrl += `&end_date=${end_date}`; }

    return apiUrl;
  }

  capture() {
    // this.createOrderHtml();
    let obj = new Htmltopdf();
    obj.captureScreen("orderPdf");
  }

  print(){
    console.log('Printing IN progress');
  }
}
