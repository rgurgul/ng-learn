import { Component, OnDestroy } from '@angular/core';
import { CountryWrapperComponent } from '../../share/components/country/country-wrapper.component';
import { CountryFlagComponent } from '../../share/components/country/country-flag.component';
import { CountrySelectedComponent } from '../../share/components/country/country-selected.component';
import { DataService } from '../../share/services/data.service';
import { Grid1Component } from 'src/app/share/components/grids/grid1.component';
import { Grid2Component } from 'src/app/share/components/grids/grid2.component';
import { Grid3Component } from 'src/app/share/components/grids/grid3.component';
import { PassTemplateDirective } from 'src/app/share/directives/pass-template.directive';

@Component({
  selector: 'app-adv-components',
  standalone: true,
  imports: [
    CountryWrapperComponent,
    CountryFlagComponent,
    CountrySelectedComponent,
    Grid1Component, Grid2Component, Grid3Component,
    PassTemplateDirective
  ],
  templateUrl: './adv-components.component.html',
  styles: ``
})
export class AdvComponentsComponent implements OnDestroy{

  countryData = this.dataService.countries;
  gridData = this.dataService.gridData;
  gridConfig: any[] = [
    { key: 'title' },
    { key: 'phone', type: 'input' },
    { key: 'id' },
    { type: 'button', action: 'remove' },
    { type: 'button', action: 'more' }
  ];

  constructor(
    private dataService: DataService
  ) {

  }
  ngOnDestroy(): void {

  }

}
