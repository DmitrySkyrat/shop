import { OverlayModule } from '@angular/cdk/overlay';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { ProductViewComponent } from './product-view.component';

describe('ProductViewComponent', () => {
  let component: ProductViewComponent;
  let fixture: ComponentFixture<ProductViewComponent>;

  const routerStub = {
    url: 'test router',
  };

  const ActivatedRouteStub = {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayModule, MatDialogModule],
      declarations: [ ProductViewComponent ],
      providers: [
        provideMockStore(),
        {provide: MatDialog, useVlaue: {open: () => {}}},
        {provide: Router, useValue: routerStub},
        {provide: ActivatedRoute, useValue: ActivatedRouteStub},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
