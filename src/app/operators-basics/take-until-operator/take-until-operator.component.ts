import { AfterViewInit, Component } from '@angular/core';
import { fromEvent, interval, Observable, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until-operator',
  standalone: true,
  imports: [],
  templateUrl: './take-until-operator.component.html',
  styleUrl: './take-until-operator.component.scss'
})
export class TakeUntilOperatorComponent implements AfterViewInit {

  buttonEvent!: Observable<Event>

  timer!: Subscription;

  ngAfterViewInit(): void {
    this.buttonEvent = fromEvent(document.getElementById('takeUntil')!, 'click')
    console.log(this.buttonEvent)
  }


  startTimer() {
    this.timer = interval(500).pipe(takeUntil(this.buttonEvent)).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      },
    })
  }

  endTimer() {
    this.timer.unsubscribe();
  }
}
