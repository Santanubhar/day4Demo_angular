import {Directive } from '@angular/core';
import {NG_VALIDATORS, FormControl, Validator} from '@angular/forms';

@Directive({
    selector: '[validateEmail]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: EmailValidator, multi: true }
    ]
})
export class EmailValidator implements Validator {

    validate(control: FormControl): { [key: string]: any } {
        const emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (!emailRegexp.test(control.value)) {
            return { "emailValid": true };
        }
        return null;
    }
}

