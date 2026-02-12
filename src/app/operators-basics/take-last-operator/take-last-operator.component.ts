import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-take-last-operator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './take-last-operator.component.html',
  styleUrl: './take-last-operator.component.scss',
})
export class TakeLastOperatorComponent implements OnInit {
  ngOnInit(): void {
    interval(1000)
      .pipe(take(10), takeLast(5))
      .subscribe((data) => {
        console.log('take last:', data);
      });
  }
}
