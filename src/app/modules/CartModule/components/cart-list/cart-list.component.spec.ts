import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { CartListComponent } from './cart-list.component';
import {MatDialogModule} from '@angular/material/dialog';

describe('CartListComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayModule, MatDialogModule],
      declarations: [ CartListComponent ],
      providers: [
        provideMockStore(),
        {provide: MatDialog, useVlaue: {open: () => {}}},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
