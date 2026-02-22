import { Component, OnInit } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while-operator',
  standalone: true,
  imports: [],
  templateUrl: './take-while-operator.component.html',
  styleUrl: './take-while-operator.component.scss',
})
export class TakeWhileOperatorComponent implements OnInit {
  ngOnInit(): void {
    interval(500)
      .pipe(takeWhile((x) => x < 5))
      .subscribe({
        next: (data) => {
          console.log(data);
        },
      });
  }
}
