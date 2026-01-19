import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-convert-to-observable',
  standalone: true,
  imports: [],
  templateUrl: './convert-to-observable.component.html',
  styleUrl: './convert-to-observable.component.scss'
})
export class ConvertToObservableComponent {
  postsArray: any[] = [
    {
      title: 'Getulio',
      description: 'a front end developer'
    },
    {
      title: 'Getulio 2',
      description: 'a front end developer 2'
    },
    {
      title: 'Getulio 3',
      description: 'a front end developer 3'
    }
  ];


  //the 'from' converts the array into an observable
  postsArrayObservable = from(this.postsArray)

  // https://www.youtube.com/watch?v=Xz4CGz0F7DA&list=PL_euSNU_eLbc0HclFbirIaMXaXzQJ_K4n&index=4 5:07

  constructor(){
    this.postsArrayObservable.subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('completed!')
      }
    })
  }

}
