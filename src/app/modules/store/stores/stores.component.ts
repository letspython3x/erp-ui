import { Component, OnInit } from '@angular/core';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
  storeList:any = [];
  isLoadingResults = true;

  constructor(private api: StoreService) { }

  ngOnInit() {
    this.api.getStores()
      .subscribe(res => {
        console.log(res);        
        this.storeList = res['data']['store'];
        console.log(this.storeList);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}
