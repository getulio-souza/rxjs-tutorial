import { FunctionObservableComponent } from './function-observable/function-observable.component';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertToObservableComponent } from "./convert-to-observable/convert-to-observable.component";
import { CustomObservablesComponent } from "./custom-observables/custom-observables.component";
import { funcObservable, functionObs } from './services/functions'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // ConvertToObservableComponent,
    // CustomObservablesComponent,
    FunctionObservableComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'rxjs-tutorial';

  ngOnInit() {
    console.log('before function')
    console.log(functionObs())
    console.log(functionObs())
    console.log('after function called')

    console.log('before observable')
    funcObservable.subscribe(data => console.log(data))
    funcObservable.subscribe(data => console.log(data))
    console.log('after observable')
  }
}
