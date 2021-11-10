import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/modules/CoreModule/store/app.state';
import { CartState } from 'src/app/modules/CoreModule/store/cart/cart.state';
import { CartProductModel } from '../../models/cart.model';
import * as CartActions from "../../../CoreModule/store/cart/cart.action";
import { selectCartSum, selectCartTotal } from 'src/app/modules/CoreModule/store/cart/cart.selector';
import { MatDialog } from '@angular/material/dialog';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FromErrorStorageServise } from 'src/app/modules/CoreModule/services/form-errors.storage.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  rezultProductsSum$!: Observable<number>;
  rezultProductsCount$!: Observable<number>;
  cartState$!: Observable<CartState>;
  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cartState$ = this.store.select('cartProducts');
    this.store.dispatch(CartActions.getProductsSum());
    this.store.dispatch(CartActions.getProductsCount());
    this.rezultProductsSum$ = this.store.select(selectCartSum);
    this.rezultProductsCount$ = this.store.select(selectCartTotal);
  }

  trackByItems(index: number, selectedProduct: CartProductModel) {
    return selectedProduct.size;
  }

  order() {
    const dialogRef = this.dialog.open(DialogOrder);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onCleanProducts() {
    this.store.dispatch(CartActions.deleteProducts());
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-order.html',
  styleUrls: ['./dialog-order.scss']
})
export class DialogOrder implements OnInit {
  dialogForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public formValidationMessages: FromErrorStorageServise
  ) { }

  get lastName(): AbstractControl {
    return this.dialogForm.get('lastName') as AbstractControl;
  }

  get email(): AbstractControl {
    return this.dialogForm.get('email') as AbstractControl;
  }

  get sendProducts(): AbstractControl {
    return this.dialogForm.get('sendProducts') as AbstractControl;
  }

  get phones(): FormArray {
    return this.dialogForm.get('phones') as FormArray;
  }

  validationMessages!: any;

  ngOnInit() {
    this.buildForm();
    this.validationMessages = this.formValidationMessages.getvalidationMessagesMap();
  }

  private buildForm() {
    this.dialogForm = this.fb.group({
      firstName: this.fb.control('', { validators: [Validators.required], updateOn: 'blur' }),

      lastName: [],
      email: ['', [Validators.required]],
      phones: this.fb.array([this.buildPnone()]),
      sendProducts: true,
      address: ['']
    })
  }

  private buildPnone() {
    return this.fb.control('');
  }

  onAddPhone(): void {
    this.phones.push(this.buildPnone());
  }

  onRemoveButton(index: number): void {
    this.phones.removeAt(index);
  }

  onBlur(event: any) {
    const controlName = event.target.getAttribute('formControlName');
    this.setValidationMessages(controlName);
  }

  private buildValidationMessages(controlName: string) {
    const c: AbstractControl = this.dialogForm.get(controlName) as AbstractControl;
    this.validationMessages.get(controlName).message = '';

    if ((c.touched || c.dirty) && c.invalid && c.errors) {
      this.validationMessages.get(controlName).message = Object.keys(c.errors)
        .map(key => this.validationMessages.get(controlName)[key])
        .join(' ');
    }
  }

  private setValidationMessages(controlName?: string) {
    if (controlName) {
      this.buildValidationMessages(controlName);
    }
    else {
      this.validationMessages.forEach((control: any, cntrlName: any) => {
        this.buildValidationMessages(cntrlName);
      });
    }
  }

  submit() {
    this.dialogForm.markAsTouched();
    if (this.dialogForm.valid) {
      console.log(this.dialogForm.value);
    }
  }
}
