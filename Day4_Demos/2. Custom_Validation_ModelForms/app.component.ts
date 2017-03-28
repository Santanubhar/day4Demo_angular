import { Component, OnInit }         from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: 'app/reg-form.component.html'
})
export class AppComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstname: ['abc', Validators.required],
            lastname: ['', Validators.required],
            address: this.formBuilder.group({
                street: [],
                zip: [],
                city: []
            }),
            email: ['', [validateEmail]]
        });
    }
}

function validateEmail(c: FormControl) {
    let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    return EMAIL_REGEXP.test(c.value) ? null : {
        emailValid: {
            valid: false
        }
    };
}
