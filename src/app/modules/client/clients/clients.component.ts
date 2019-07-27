import { Component, OnInit } from '@angular/core';
import {ClientService} from '../client.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  displayedColumns: string[];
  clientList:any = [];
  isLoadingResults = true;

  constructor(private api: ClientService) { }

  
  ngOnInit() {
    this.api.getClients()
      .subscribe(res => {
        this.clientList = res;
        console.log(this.clientList);
        this.isLoadingResults = true;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
