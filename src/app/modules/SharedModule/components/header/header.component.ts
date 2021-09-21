import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle') title!: ElementRef;
  constructor() {}

  ngOnInit(): void {
    ;
  }

  ngAfterViewInit(): void {
    this.title.nativeElement.textContent = 'Angular Pizza';
  }
}
