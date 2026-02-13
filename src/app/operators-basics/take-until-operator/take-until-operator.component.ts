import { Component } from '@angular/core';
import { fromEvent, interval, Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until-operator',
  standalone: true,
  imports: [],
  templateUrl: './take-until-operator.component.html',
  styleUrl: './take-until-operator.component.scss'
})
export class TakeUntilOperatorComponent{

  buttonEvent!: Observable<Event>

  timer!: Subscription;

  stopTimer$ = new Subject<void>();

  startTimer() {
    interval(500)
      .pipe(
        (takeUntil(this.stopTimer$)))
      .subscribe({
        next: (data) => console.log(data),
        complete: () => console.log('completed!')
        })
  }

  endTimer() {
    this.stopTimer$.next()
  }
}
