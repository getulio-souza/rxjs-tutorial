import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cancelling-observable',
  standalone: true,
  imports: [],
  templateUrl: './cancelling-observable.component.html',
  styleUrl: './cancelling-observable.component.scss',
})
export class CancellingObservableComponent implements OnInit, OnDestroy {

  timerSubscription!: Subscription;
  constructor(){}

  ngOnInit(): void {
    this.timerSubscription = interval(1000).subscribe((data) => {
      console.log(new Date().toLocaleTimeString() + ' ' + data);
    });
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe()
  }

  cancelTimer() {
    console.log('cancel the observale')
    this.timerSubscription.unsubscribe()
  }

}
