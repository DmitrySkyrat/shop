import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleMenu]'
})
export class ToggleMenuDirective {

  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('click') hideImage(): void {
    this.render.setStyle(this.el.nativeElement.firstElementChild, 'transform', 'rotate(180deg)');
  }
}
