import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, first } from 'rxjs/operators';

@Directive({
    selector: '[appAsyncEmailValidator][formControlName]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: AsyncEmailValidatorDirective,
            multi: true
        }
    ]
})
export class AsyncEmailValidatorDirective implements Validator {
    validate(c: AbstractControl): Observable<{[key: string]: any} | null> {
        return this.validateEmail(c.value)
        .pipe(
            debounceTime(500),
            distinctUntilChanged(),
            first()
          );
    }

    private validateEmail(email: string): Observable<{[key: string]: any} | null> {
        return new Observable(observer => {
            if (email === 'dima@gmail.com') {
                observer.next({ asyncEmailInvalid: true })
            } else {
                observer.next(null)
            }
        })
    }
}
