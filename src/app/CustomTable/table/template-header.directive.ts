import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[template-header]',
})
export class TemplateHeaderDirective {
  @Input('template-header') templateName: string = '';

  constructor(public readonly template: TemplateRef<any>) {}
}

@Directive({
  selector: '[header]',
})
export class HeaderDirective {
  @Input('header') templateName: string = '';

  constructor(public readonly template: TemplateRef<any>) {}
}
