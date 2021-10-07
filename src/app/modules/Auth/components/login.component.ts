import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../CoreModule/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  hide = true;
  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.form = this.fb.group({
      login: '',
      password: ''
    });
  }

  submit() {
    this.form.markAsTouched();
    this.localStorageService.setToLocalStorage(this.form.get('login')?.value, this.form.get('password')?.value);
    this.router.navigate(['/products']);
  }
}
