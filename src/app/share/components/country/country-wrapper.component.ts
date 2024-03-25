import { CommonModule } from '@angular/common';
import { Component, WritableSignal, computed, effect, input, signal } from '@angular/core';
import { useLocalStorage } from '../../utils/use-localstorage';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-country-wrapper',
  standalone: true,
  imports: [CommonModule,FormsModule],
  template: `
    <div class="x">
      {{selected()}}

      <select #x (change)="changeChandler(x.value)" [ngModel]="selected()">
        @for (item of data(); track $index) {
          <option [value]="item.code">
            {{item.name}}
          </option>
        }
      </select>
      <ng-content></ng-content>
    </div>
  `,
  styles: ``
})
export class CountryWrapperComponent {
  selected: WritableSignal<string> = useLocalStorage('country').value;
  changeChandler(arg0: any) {
    this.selected.set(arg0)
  }
  data = input<any[]>();
  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.selected()}`);
      //localStorage.setItem('country', this.selected())
    });
  }

}
