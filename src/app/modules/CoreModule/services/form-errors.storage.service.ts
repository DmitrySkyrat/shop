import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FromErrorStorageServise {
    private validationMessagesMap = new Map([
        ['firstName', {
            message: '',
            required: 'Please enter your first name.',
            firstName: 'Please enter your first name with capitalize letter'
        }],
        ['email', {
            message: '',
            required: 'Please enter your email address.',
            asyncEmailInvalid: 'This email already exists. Please enter other email address.'
        }]
    ]);

    getvalidationMessagesMap() {
        return this.validationMessagesMap;
    }
}
