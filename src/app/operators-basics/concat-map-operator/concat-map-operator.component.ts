import { Component, OnInit } from '@angular/core';
import { concatMap, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-concat-map-operator',
  standalone: true,
  imports: [],
  templateUrl: './concat-map-operator.component.html',
  styleUrl: './concat-map-operator.component.scss'
})
export class ConcatMapOperatorComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4)
      .pipe(
        concatMap((id) => {
          console.log(id)
          return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
            map((data) => {
              return data.response;
            })
          )
        })
      )
      .subscribe((data) => {
        console.log(data)
      }
    )
  }
}
