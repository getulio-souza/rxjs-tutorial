import { of, pipe, skipLast } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skip-last-operator',
  standalone: true,
  imports: [],
  templateUrl: './skip-last-operator.component.html',
  styleUrl: './skip-last-operator.component.scss'
})
export class SkipLastOperatorComponent implements OnInit {

  ngOnInit(): void {

    of(1,2,3,4,5,6,7,8,9,10)
      .pipe(skipLast(3))
      .subscribe(data => console.log(data))
  }
}
