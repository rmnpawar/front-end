import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[ClickStopPropagation]'
})
export class ClickStopPropagationDirective {

  constructor() { }

  @HostListener("click", ["$event"]) event;

  public onClick(event: any) {
    event.stopPropagation();
  }


}
