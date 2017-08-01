import { Directive } from '@angular/core';
import { HostBinding ,HostListener} from "@angular/core";
@Directive({
  selector: '[appAppDropdownClick]'
})
export class AppDropdownClickDirective {

 @HostBinding("class.open") isClicked = false;
  constructor() { }
  @HostListener("click") toggleClicked(){
    this.isClicked=!this.isClicked;
  }

}
