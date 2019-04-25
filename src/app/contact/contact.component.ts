import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ContactComponent implements OnInit {
    productForm: FormGroup;
    submitted = false;
    success = false;

    constructor(private formbuilder: FormBuilder) { }

    ngOnInit() {
        this.productForm = this.formbuilder.group({
            name: ['', Validators.required],
            message: ['', Validators.required]
        });
    }

    onSubmit() {
        this.submitted = true;
        if (this.productForm.invalid) {
            return;
        }
        this.success = true;
    }


}
