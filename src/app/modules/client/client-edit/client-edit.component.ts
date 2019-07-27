import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent {
  searchClientForm: FormGroup;
  updateClientForm: FormGroup;
  isLoadingResults = false;
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: string;
  category: string;
  membership: string;
  primary_phone: string;
  secondary_phone: string;
  email: string;
  address: string;
  postal_code: string;
  state: string;
  city: string;
  country: string;

  constructor(private formBuilder: FormBuilder,
    private api: ClientService) {
    this.searchClientForm = this.formBuilder.group({
      client_id: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
    })
    this.updateClientForm = this.formBuilder.group({
      first_name: new FormControl(),
      middle_name: new FormControl(),
      last_name: new FormControl(),
      gender: new FormControl(),
      category: new FormControl(),
      membership: new FormControl(),
      primary_phone: new FormControl(),
      secondary_phone: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      postal_code: new FormControl(),
      state: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
    })
  }

  onSearchFormSubmit(form: any) {
    alert('Searching...');
    console.log(form);
    let client_id = form.client_id;
    let phone = form.phone;
    let email = form.email;
    this.isLoadingResults = true;
    this.api.getClient(client_id, phone, email).subscribe(res => {
      let client = res[0];
      this.first_name=client['first_name'];
      this.middle_name=client['middle_name'];
      this.last_name=client['last_name'];
      this.gender=client['gender'];
      this.membership=client['membership'];
      this.primary_phone=client['primary_phone'];
      this.secondary_phone=client['secondary_phone'];
      this.email=client['email'];
      this.address=client['address'];
      this.postal_code=client['postal_code'];
      this.state=client['state'];
      this.city=client['city'];
      this.country=client['country'];

      this.isLoadingResults = true;
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });;
  }
  onUpdateFormSubmit(form: any) {
    alert('Updating...');
    console.log(form);
  }
}
