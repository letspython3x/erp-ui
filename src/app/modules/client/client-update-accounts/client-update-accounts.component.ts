import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { FormControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'client-update-accounts',
  templateUrl: './client-update-accounts.component.html',
  styleUrls: ['./client-update-accounts.component.scss']
})
export class ClientUpdateAccountsComponent {
  client_id: number;
  amount: number;  
  clientUpdateAccountsForm: FormGroup;

  constructor(private api: ClientService, private formBuilder: FormBuilder) {
    this.clientUpdateAccountsForm = this.formBuilder.group({
      client_id: new FormControl(),
      amount: new FormControl()
    });
  }
  
  onFormSubmit(form: any) {
    alert('Updating Client Account...');
    console.log(form);
    let account = form;
    this.api.updateClientAccounts(account).subscribe(res => {
      console.log(res);
    });
    this.clientUpdateAccountsForm.reset();
  }

}
