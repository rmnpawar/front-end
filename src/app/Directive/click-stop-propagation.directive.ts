import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[ClickStopPropagation]'
})
export class ClickStopPropagationDirective {

  constructor() { }

  @HostListener("click", ["$event"]) click() {
    event.stopPropagation();
  };

  public mouseup(event: any) {

  }


}
