import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { CreateTaskComponent } from "./create-task/create-task.component";
import { ShowTaskComponent } from "./show-task/show-task.component";

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CreateTaskComponent, ShowTaskComponent],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent implements OnInit {

  ngOnInit(): void {
    // this.observable()
    this.subjectAsObservable()
  }


  observable() {
    let observable$ = new Observable<number>(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    let observer1 = {
      next: (data: number) => {
        console.log('observer 1:',data)
      },
      error: (err: any) => {
        console.error(err)
      },
      complete: () => {
        console.log('complete observer 1')
      }
    }

    let observer2= {
      next: (data: number) => {
        console.log('observer 2:',data)
      },
      error: (err: any) => {
        console.error(err)
      },
      complete: () => {
        console.log('complete observer 2')
      }
    }

    observable$.subscribe(observer1);
    observable$.subscribe(observer2)
  }

  subjectAsObservable() {
    let observable$ = of(1, 2, 3, 4, 5) //my observable
    let subject = new Subject<number>(); //my subject

    let observer1 = {
      next: (data: number) => {
        console.log('observer 1:',data)
      },
      error: (err: any) => {
        console.error(err)
      },
      complete: () => {
        console.log('complete observer 1')
      }
    }

    let observer2 = {
      next: (data: number) => {
        console.log('observer 2:',data)
      },
      error: (err: any) => {
        console.error(err)
      },
      complete: () => {
        console.log('complete observer 2')
      }
    }

    subject.subscribe(observer1);
    subject.subscribe(observer2);

    observable$.subscribe(subject)
  }
}
