import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, input } from '@angular/core';
import { PassTemplateDirective } from '../../directives/pass-template.directive';

@Component({
  selector: 'app-grid3',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <div style="border:2px solid;">
      @for (item of data(); track $index) {
        <ng-container [ngTemplateOutlet]="passDir.tpl" [ngTemplateOutletContext]="{$implicit:item}"]></ng-container>
      }
    </div>
  `,
  styles: ``
})
export class Grid3Component {
  @ContentChild(PassTemplateDirective) passDir: PassTemplateDirective;
  data = input<any[]>();
}
