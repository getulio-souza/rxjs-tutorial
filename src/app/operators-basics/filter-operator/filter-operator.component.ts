import { filter, from, interval, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-operator',
  standalone: true,
  imports: [],
  templateUrl: './filter-operator.component.html',
  styleUrl: './filter-operator.component.scss'
})
export class FilterOperatorComponent implements OnInit {

  names: string[] = ['getulio', 'marcelo', 'raul']

  ngOnInit(): void {

    of(...this.names)
      .pipe(
        filter(name => name.startsWith('get'))
      )
      .subscribe((name)=> console.log(name))
  }
}
