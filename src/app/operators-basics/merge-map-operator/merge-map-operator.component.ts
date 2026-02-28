import { concatMap, mergeMap, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-merge-map-operator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './merge-map-operator.component.html',
  styleUrl: './merge-map-operator.component.scss'
})
export class MergeMapOperatorComponent implements OnInit {

  userData: any[] = [];

  ngOnInit(): void {
    of(1, 2, 3, 4, 5, 6)
      .pipe(
        mergeMap((id: any) => {
          return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
        })
      )
      .subscribe(data => {
        console.log(data.response)
        this.userData.push(data.response)
      })
  }
}
