import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Opacity]'
})
export class OpacityDirective {

  constructor(public element:ElementRef) {
    this.element.nativeElement.style.borderRadius = '20px 20px 0 0';
 }
 @HostListener('mouseover') increase(){
  this.element.nativeElement.style.opacity = '.7';

 }
 @HostListener('mouseout') origin(){
  this.element.nativeElement.style.opacity = '1';

 }

}
