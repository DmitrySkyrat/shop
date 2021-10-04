import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFrame]'
})
export class FrameDirective {
  @Input('appFrame') backgroundColor!: string;
  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('click') onClick(): void {
    this.render.setStyle(this.el.nativeElement, 'border', '1px solid #EB5A1E');
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.changeBackground(this.backgroundColor || "#FFFFFF");
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.changeBackground(null);
  }

  private changeBackground(backgroundColor: string | null): void {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', backgroundColor);
  }
}
