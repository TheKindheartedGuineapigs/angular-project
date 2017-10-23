import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightItem]'
})
export class HighlightItemDirective {
  // bgColor: string;
  constructor(private elementRef: ElementRef) { }

  @HostListener('click') onItemClick(){
    this.elementRef.nativeElement.style.color = 'black';
  }

  // @HostListener('mouseleave') onMouseLeave(){
  //   this.elementRef.nativeElement.style.color = 'none';
  // }

}