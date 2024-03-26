import { Routes } from '@angular/router';
import { AdvComponentsComponent } from './pages/adv-components/adv-components.component';
import { LearnRxjsComponent } from './pages/learn-rxjs/learn-rxjs.component';


export const routes: Routes = [
    { path: 'adv-components', component: AdvComponentsComponent },
    { path: 'rxjs', component: LearnRxjsComponent },
];
