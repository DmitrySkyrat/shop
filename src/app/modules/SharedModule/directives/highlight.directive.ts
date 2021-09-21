import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirective {
  @HostBinding('class') className = 'highlight';
  constructor() {}
}
