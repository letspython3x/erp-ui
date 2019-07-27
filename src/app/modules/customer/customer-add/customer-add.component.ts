import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent {
  clientForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: ClientService,
    private formBuilder: FormBuilder) {
    this.clientForm = this.formBuilder.group({
      first_name: new FormControl(),
      middle_name: new FormControl(),
      last_name: new FormControl(),
      contact_title: new FormControl(),
      gender: new FormControl(),
      membership: new FormControl(),
      primary_phone: new FormControl(),
      secondary_phone: new FormControl(),
      fax: new FormControl(),
      email: new FormControl(),
      country: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      postal_code: new FormControl(),
      contact_via_email: new FormControl(),
      contact_via_primary_phone: new FormControl(),
      contact_via_secondary_phone: new FormControl(),
    });
  }

  onFormSubmit(clientForm: any) {
    // this.isLoadingResults = true;
    console.log("Sending request to add the client");
    console.log(clientForm);
    this.api.addClient(clientForm)
      .subscribe(res => {
        console.log(res);
        let client_id = res['client_id'];
        alert(`Client Saved: ${client_id}`);
        console.log("Client ID: " + client_id);
        this.isLoadingResults = false;
        // this.router.navigate(['/product-details', id]);
        this.clientForm.reset();
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}