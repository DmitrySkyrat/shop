import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/modules/CoreModule/store/app.state';
import { selectCartSum, selectCartTotal } from 'src/app/modules/CoreModule/store/cart/cart.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle') title!: ElementRef;
  rezultProductsSum$!: Observable<number>;
  rezultProductsCount$!: Observable<number>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.rezultProductsSum$ = this.store.select(selectCartSum);
    this.rezultProductsCount$ = this.store.select(selectCartTotal);
  }

  ngAfterViewInit(): void {
    this.title.nativeElement.textContent = 'Angular Pizza';
  }
}
