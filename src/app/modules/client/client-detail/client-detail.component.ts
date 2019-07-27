import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { IClient } from '../../../shared/models/client.model';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent {
  client_id: number;
  email: string;
  phone: string;
  client: IClient;
  clientDetailForm: FormGroup;

  constructor(private api: ClientService, private formBuilder: FormBuilder) {
    this.clientDetailForm = this.formBuilder.group({
      client_id: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
    });
  }

  onFormSubmit(clientDetailForm: any) {
    this.client_id = clientDetailForm.client_id;
    this.email = clientDetailForm.email;
    this.phone = clientDetailForm.phone;

    console.log(`Fetching product data for ${this.client_id} ${this.phone}`);
    this.api.getClient(this.client_id, this.phone, this.email).
      subscribe(data => {
        if (data) {
          console.log(data);
          this.client = data;
        }
        else {
          this.client = null;
        }
      });
  }


  // onFormSubmit(clientDetailForm: any) {
  //   this.client_id = clientDetailForm.client_id;
  //   this.email = clientDetailForm.email;
  //   this.phone = clientDetailForm.phone;

  //   console.log(`Fetching product data for ${this.client_id} ${this.phone}`);
  //   if (this.client_id) {
  //     this.api.getClient(this.client_id).
  //       subscribe(data => {
  //         if (data) {
  //           this.client = data;
  //         }
  //         else {
  //           this.client = null;
  //         }
  //       });
  //   }
  //   else if (this.email) {
  //     this.api.getClient(this.email).
  //       subscribe(data => {
  //         if (data) {
  //           this.client = data
  //         } else {
  //           this.client = null;
  //         }
  //       });
  //   }
  //   else if (this.phone) {
  //     this.api.getClient(this.phone).
  //       subscribe(data => {
  //         if (data) {
  //           this.client = data
  //         } else {
  //           this.client = null;
  //         }
  //       });
  //   }
  // }
}
