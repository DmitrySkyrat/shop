import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
@Directive({
    selector: '[customFirstNameValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: FirstLetterValidator,
            multi: true
        }
    ]
})
export class FirstLetterValidator implements Validator {
    validate(c: AbstractControl): ValidationErrors | null {
        if (c.value !== undefined && c.value.charAt(0) === c.value.charAt(0).toUpperCase()) {
            return null;
        }
        return {
            firstName: true
        }
    }
}
