import { Routes } from '@angular/router';
import { OperatorsBasicsComponent } from './operators-basics/operators-basics.component';
import { TakeOperatorComponent } from './operators-basics/take-operator/take-operator.component';
import { TakeLastOperatorComponent } from './operators-basics/take-last-operator/take-last-operator.component';
import { TakeUntilOperatorComponent } from './operators-basics/take-until-operator/take-until-operator.component';
import { SkipOperatorComponent } from './operators-basics/skip-operator/skip-operator.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'operators',
    pathMatch: 'full'
  },
  {
    path: 'operators',
    component: OperatorsBasicsComponent,
    children: [
      { path: 'take', component: TakeOperatorComponent },
      { path: 'takeLast', component: TakeLastOperatorComponent },
      { path: 'takeUntil', component: TakeUntilOperatorComponent },
      {path: 'skip', component: SkipOperatorComponent}
    ],
  },
];
