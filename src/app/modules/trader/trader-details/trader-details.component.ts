import { Component, OnInit } from '@angular/core';
import { TraderService } from '../trader.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-trader-details',
  templateUrl: './trader-details.component.html',
  styleUrls: ['./trader-details.component.scss']
})
export class TraderDetailsComponent{
  trader:any;
  trader_id: number;
  name: string;
  address: string;
  country: string;
  traderDetailForm: FormGroup;

  constructor(private api: TraderService, private formBuilder: FormBuilder) {
    this.traderDetailForm = this.formBuilder.group({
      trader_id: new FormControl(),
    });
  }

  onFormSubmit(traderDetailForm: any) {
    this.trader_id = traderDetailForm.trader_id;    
    console.log(`Fetching product data for ${this.trader_id}`);
    this.api.getTrader(this.trader_id).
      subscribe(data => {
        if (data) {
          this.trader = data['data']['trader'];
        }
        else {
          this.trader = null;
        }
      });
  }
}