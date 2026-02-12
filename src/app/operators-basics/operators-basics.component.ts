import { Component, OnInit } from '@angular/core';
import { filter, interval, map, of, take } from 'rxjs';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-operators-basics',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './operators-basics.component.html',
  styleUrl: './operators-basics.component.scss'
})
export class OperatorsBasicsComponent implements OnInit{

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // const newObservable = interval(1000)

    // newObservable.subscribe((data: any) => {
    //   if (data % 2 === 0) {
    //     console.log('even number:', data);
    //   }
    // })

    // newObservable.pipe(
    //   filter((data) => {
    //     return data % 2 === 0
    //   }),

    //   map((data: any) => {
    //     return 'even number:' + data
    //   })

    // ).subscribe((data: any) => {
    //   console.log(data);

    // })


    //take operator
    // interval(500)
    //   .pipe(
    //     take(5)
    //   )
    //   .subscribe((data) => {

    //   console.log(data)
    // })

    //take last




  }

}
