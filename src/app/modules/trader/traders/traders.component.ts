import { Component, OnInit } from '@angular/core';
import { TraderService } from '../trader.service';
@Component({
  selector: 'app-traders',
  templateUrl: './traders.component.html',
  styleUrls: ['./traders.component.scss']
})
export class TradersComponent implements OnInit {
  traderList: any;
  isLoadingResults = true;
  constructor(private api: TraderService) { }

  ngOnInit() {
    this.api.getTraders().subscribe(res => {
      this.traderList = res['data']['trader'];
      console.log(this.traderList);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
