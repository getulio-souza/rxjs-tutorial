import { Component, OnInit } from '@angular/core';
import { of, skipWhile } from 'rxjs';

@Component({
  selector: 'app-skip-while-operator',
  standalone: true,
  imports: [],
  templateUrl: './skip-while-operator.component.html',
  styleUrl: './skip-while-operator.component.scss'
})
export class SkipWhileOperatorComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5, 6)
      .pipe(skipWhile(x => x < 3))
      .subscribe(data =>
      console.log(data)
    )
  }
}
