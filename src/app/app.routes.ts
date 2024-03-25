import { Routes } from '@angular/router';
import { AdvComponentsComponent } from './pages/adv-components/adv-components.component';
import { ComposablesComponent } from './pages/composables/composables.component';

export const routes: Routes = [
    { path: 'adv-components', component: AdvComponentsComponent },
    { path: 'composables', component: ComposablesComponent },
];
