import { Component, OnInit } from '@angular/core';
import { interval, skip, take } from 'rxjs';

@Component({
  selector: 'app-skip-operator',
  standalone: true,
  imports: [],
  templateUrl: './skip-operator.component.html',
  styleUrl: './skip-operator.component.scss'
})
export class SkipOperatorComponent implements OnInit{
  ngOnInit(): void {
    interval(500)
    .pipe(
      take(20),
      skip(10)
    )
    .subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      },
      complete: ()=>{
        console.log('completed')
      }
    })
  }
}
