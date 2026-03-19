import { Component, OnInit } from '@angular/core';
import { filter, from, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map-operator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-operator.component.html',
  styleUrl: './map-operator.component.scss'
})
export class MapOperatorComponent implements OnInit {
  myObservable = from([2, 4, 6, 8, 10])
  dataValue: number[] = [];

  ngOnInit(): void {
    this.myObservable
      .pipe(
      // map(x => x*10)
        filter(x => x > 2 && x < 8)
      )
      .subscribe((data) => {
      console.log(data)
      this.dataValue.push(data)
    })
}
}
