import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable, skipUntil } from 'rxjs';

@Component({
  selector: 'app-skip-until-operator',
  standalone: true,
  imports: [],
  templateUrl: './skip-until-operator.component.html',
  styleUrl: './skip-until-operator.component.scss'
})
export class SkipUntilOperatorComponent implements OnInit, AfterViewInit{
  value: any;

  @ViewChild('showUntilButton') button!: ElementRef

  ngOnInit(): void {
    console.log(this.button)
  }

   ngAfterViewInit(): void {
     const buttonEvent$ = fromEvent(this.button.nativeElement, 'click')

     interval(500)
       .pipe(skipUntil(buttonEvent$))
       .subscribe((data) => {
         console.log(data)
         this.value = data;
     }
     )
   }

}
