import { Component, OnInit } from '@angular/core';
import { interval, map, of, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-switch-map-operator',
  standalone: true,
  imports: [],
  templateUrl: './switch-map-operator.component.html',
  styleUrl: './switch-map-operator.component.scss'
})
export class SwitchMapOperatorComponent implements OnInit {
  ngOnInit(): void {
    interval(1000)
      .pipe(
        filter(id => id > 0),
        switchMap(id =>
          return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .pipe(
              map(response => response.response)
          )
        )
      )

      .subscribe({
        next: data => console.log(data)
        error: err => console.error(err)
      })
  }
}
