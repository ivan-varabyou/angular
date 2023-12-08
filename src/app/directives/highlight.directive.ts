import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight = ''
  private hightlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hightlight(this.appHighlight || 'blue')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hightlight('')
  }


}
