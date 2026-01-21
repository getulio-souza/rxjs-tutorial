import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer4 } from '../services/observable4';

@Component({
  selector: 'app-custom-observables',
  standalone: true,
  imports: [],
  templateUrl: './custom-observables.component.html',
  styleUrl: './custom-observables.component.scss'
})
export class CustomObservablesComponent implements OnInit {

  ngOnInit(): void {
    const newObservable = new Observable<number>(oberserver => {
      for (let i = 0; i < 5; i++){

        if (i === 4) {
          observer.error('unkown error. i value is 4')
        }

        setTimeout(() => {
          oberserver.next(i)
        }, 3000)

      }
      // oberserver.complete()
    })

    let observer = {
      next: (data: number) => console.log(data),
      error: (err: any) => console.log(err),
      complete: () => console.log('complete! all done!')
    }

    newObservable.subscribe(observer)

    newObservable.subscribe(new Observer4())
  }
}
