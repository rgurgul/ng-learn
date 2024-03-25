import { Component } from '@angular/core';
import { CountryWrapperComponent } from './country-wrapper.component';

@Component({
  selector: 'app-country-flag',
  standalone: true,
  imports: [],
  template: `
    <p>

      <img src="https://flagsapi.com/{{parent.selected()}}/shiny/64.png" />
    </p>
  `,
  styles: ``
})
export class CountryFlagComponent {

  constructor(
    public parent: CountryWrapperComponent
  ){}

}
