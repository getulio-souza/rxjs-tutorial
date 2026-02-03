import { Routes } from '@angular/router';
import { OperatorsBasicsComponent } from './operators-basics/operators-basics.component';
import { TakeOperatorComponent } from './operators-basics/take-operator/take-operator.component';

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
      { path: 'take', component: TakeOperatorComponent }
    ],
  },
];
