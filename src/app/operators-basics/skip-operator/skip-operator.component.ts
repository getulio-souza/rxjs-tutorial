import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, interval, of, skip, switchMap, take } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-skip-operator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './skip-operator.component.html',
  styleUrl: './skip-operator.component.scss'
})
export class SkipOperatorComponent implements OnInit{

  searchControl = new FormControl('');

  constructor(private api: ApiService){}

  ngOnInit(): void {

    this.searchControl.valueChanges
    .pipe(
      skip(1),
      debounceTime(500),
      switchMap(query => this.api.search(query))
    ).subscribe((results => {
      console.log(results)
    }))

    // of(1,2,3,4,5)
    // .pipe(
    //   skip(3)
    // )
    // .subscribe({
    //   next: (data) => {
    //     console.log(data)
    //   },
    //   error: (err) => {
    //     console.log(err)
    //   },
    //   complete: ()=>{
    //     console.log('completed')
    //   }
    // })


  }
}
