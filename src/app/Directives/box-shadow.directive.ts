import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[BoxShadow]'
})
export class BoxShadowDirective {
  shadow1:string="3px 7px";
  shadow2:string="5px 10px";
  constructor(public element:ElementRef) {
    this.element.nativeElement.style.borderRadius = '20px';
    // this.element.nativeElement.style.border = '3px solid red';
 }
 @HostListener('mouseover') increase(){
  this.element.nativeElement.style.boxShadow=`3px 3px 5px 6px #ccc`

 }
 @HostListener('mouseout') origin(){
  this.element.nativeElement.style.boxShadow= `0 0 0 0` ;

 }

}
