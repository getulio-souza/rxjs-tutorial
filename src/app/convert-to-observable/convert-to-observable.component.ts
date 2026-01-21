import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';

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
  postsArrayObservable$ = from(this.postsArray)

  // https://www.youtube.com/watch?v=Xz4CGz0F7DA&list=PL_euSNU_eLbc0HclFbirIaMXaXzQJ_K4n&index=4 5:07

  promise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve('resolve the promise, sending data...')
    },3000)
  })

  promiseObservable$ = from(this.promise)

  constructor(){
    // this.postsArrayObservable$.subscribe({
    //   next: (data) => {
    //     console.log(data)
    //   },
    //   error: (err) => {
    //     console.log(err)
    //   },
    //   complete: () => {
    //     console.log('completed!')
    //   }
    // })

    // this.promiseObservable$.subscribe({
    //   next: (data) => {
    //     console.log(data)
    //   },
    //   error: (err) => {
    //     console.log(err)
    //   },
    //   complete: () => {
    //     console.log('completed promise')
    //   }
    // })
  }

  // ngAfterViewInit(): void {
  //   fromEvent(document.getElementById('click-button'), 'click').subscribe({
  //      next: (data) => {
  //       console.log(data)
  //     },
  //     error: (err) => {
  //       console.log(err)
  //     },
  //   })
  // }

  onCallObservables() {

    this.postsArrayObservable$.subscribe({
      next: (data) => {
        console.log(data)
        console.log(typeof data)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('completed!')
      }
    })

    this.promiseObservable$.subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('completed promise')
      }
    })
  }

}
