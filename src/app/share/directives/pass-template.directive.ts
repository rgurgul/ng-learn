import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appPassTemplate]',
  standalone: true
})
export class PassTemplateDirective {

  constructor(
    public tpl: TemplateRef<any>
  ) { }

}
