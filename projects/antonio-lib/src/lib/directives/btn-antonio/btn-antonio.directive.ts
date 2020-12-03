import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[libBtnAntonio]'
})
export class BtnAntonioDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = "blue";
    element.nativeElement.style.color = "white";
  }


  @HostListener('mouseover') onHover() {
    window.alert("hover");
  }

}
