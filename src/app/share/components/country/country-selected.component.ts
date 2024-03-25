import { Component } from '@angular/core';
import { CountryWrapperComponent } from './country-wrapper.component';

@Component({
  selector: 'app-country-selected',
  standalone: true,
  imports: [],
  template: `
    <p>
      selected: {{parent.selected()}}
    </p>
  `,
  styles: ``
})
export class CountrySelectedComponent {
  constructor(
    public parent: CountryWrapperComponent
  ) { }
}
