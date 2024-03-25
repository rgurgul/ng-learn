import { JsonPipe, KeyValuePipe, NgTemplateOutlet, UpperCasePipe } from '@angular/common';
import { Component, ContentChild, TemplateRef, input } from '@angular/core';

@Component({
  selector: 'app-grid2',
  standalone: true,
  imports: [NgTemplateOutlet, JsonPipe, KeyValuePipe, UpperCasePipe],
  template: `
    <div>

        <table class="table table-hover table-sm table-bordered">
          <thead>
            <tr>@for (head of data()[0] | keyvalue; track head) {
              <th class="bg-light border">{{head.key|uppercase}}</th>
            }</tr>
          </thead>
          <tbody>
            @for (item of data(); track $index) {
              <ng-container [ngTemplateOutlet]="tpl" [ngTemplateOutletContext]="{$implicit: item, nr:$index}"></ng-container>
            }
          </tbody>
        </table>


    </div>
  `,
  styles: `
    :host {
      border: 2px solid;
      display:block;
      padding:10px;
      margin:10px;
    }
  `
})
export class Grid2Component {
  @ContentChild(TemplateRef) tpl: TemplateRef<any>;
  data = input<any[]>();
}
