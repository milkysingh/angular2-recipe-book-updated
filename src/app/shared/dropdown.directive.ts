import {
  Directive,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core"
@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  @HostBinding("class.open") isOpenHover = false;


  @HostListener("mouseenter") toggleHoverEnter() {
    this.isOpenHover = !this.isOpenHover;
  }
  @HostListener("mouseleave") toggleHoverLeave() {
    this.isOpenHover = !this.isOpenHover;
  }

}
