import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { QuotationService } from '../quotation.service';
import { CategoryService } from '../../category/category.service';
import { Router } from "@angular/router";
import { ProductService } from '@/modules/product/product.service';
// import { StoreService } from '../../store/store.service';
// import { CustomerService } from '../../customer/customer.service';
// import { ProductsComponent } from '@/modules/product/products/products.component';
// import { ICategory } from '@/shared/models/category.model';


@Component({
  selector: 'app-quotation-add',
  templateUrl: './quotation-add.component.html',
  styleUrls: ['./quotation-add.component.scss']
})
export class QuotationAddComponent implements OnInit {
  quotation_form_group: FormGroup;
  quotation: any;
  quotation_id: any;
  store: any;
  customer: any;

  filteredProducts: any;

  categories: any;
  product_names: any = [];
  total: number;
  total_row: number;
  quotation_submitted: boolean = false;
  isLoadingResults: boolean = true;

  constructor(private qsApi: QuotationService,
    // private storeApi: StoreService,
    // private customerApi: CustomerService,
    private categoryApi: CategoryService,
    private productApi: ProductService,
    private _fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.quotation_form_group = this._fb.group({
      customer_id: new FormControl(999, Validators.required),
      employee_id: new FormControl(999, Validators.required),
      store_id: new FormControl(999, Validators.required),
      quotation_type: new FormControl('', Validators.required),
      payment_type: new FormControl('', Validators.required),
      discount_on_total: new FormControl(0, Validators.required),
      total_tax: new FormControl(0, Validators.required),
      discounted_sub_total: new FormControl(0, Validators.required),
      quotation_total: new FormControl(0, Validators.required),
      item_rows: this._fb.array([this.initItemRow()])
    });

    this.getCategories();
    this.getProductNames();
  }

  initItemRow(): FormGroup {
    return this._fb.group({
      product_name: new FormControl('', Validators.required),
      barcode_number: new FormControl('', Validators.required),
      category_name: new FormControl('', Validators.required),
      quantity: new FormControl(0, Validators.required),
      quoted_price: new FormControl(0, Validators.required),
      item_discount: new FormControl(0, Validators.required),
      tax: new FormControl(7, Validators.required),
      line_item_total: new FormControl(0, Validators.required),
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
    let formObj = this.quotation_form_group.getRawValue();
    let serializedForm = JSON.stringify(formObj);
    console.log(serializedForm);
    this.qsApi.addQuotation(serializedForm)
      .subscribe(res => {
        console.log(res);
        this.quotation_id = res['quotation_id'];
        alert(`Quotation Saved: ${this.quotation_id}`);
        this.quotation_form_group.reset();
        this.router.navigate([`/quotation-details/${this.quotation_id}`]);
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

  createQuotationHtml() {
    this.quotation_id = 2;
    this.qsApi.getQuotation(this.quotation_id)
      .subscribe(res => {
        this.quotation = res["data"];
        console.log(this.quotation);
      });
  }

  getCategories() {
    this.categoryApi.getCategories().subscribe(res => {
      console.log("Categories Fetched");
      this.categories = res
    });
  }
  getProductNames() {
    this.productApi.getProducts().subscribe(res => {
      console.log("Products Fetched");
      res.forEach(p => this.product_names.push(p.product_name));
      console.log(this.product_names);
    });

  }
}