import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-grid1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      grid1
      <br>
      <table>
        <thead>
          <tr>
            @for (item of config(); track $index) {
              <th>{{item.key||item.action|uppercase}}</th>
            }
          </tr>
        </thead>
        <tbody>
          @for (item of data(); track $index) {
            <tr>
              @for (config of config(); track $index) {
                <ng-container [ngSwitch]="config.type">
                  <td *ngSwitchCase="'input'">
                    <input type="text" [value]="item[config.key]">
                  </td>
                  <td *ngSwitchCase="'button'">
                    <button style="padding: 10px; background-color: red;">{{config.action}}</button>
                  </td>
                  <td *ngSwitchDefault>
                    {{item[config.key]}}
                  </td>
              </ng-container>
              }

            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: `
    table {
      border-collapse: collapse;
    }
    td {
      border: 1px solid;
      padding: 4px;
    }
  `
})
export class Grid1Component {

  data = input<any[]>();
  config = input<any[]>();

}
