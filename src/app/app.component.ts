import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertToObservableComponent } from "./convert-to-observable/convert-to-observable.component";
import { CustomObservablesComponent } from "./custom-observables/custom-observables.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // ConvertToObservableComponent,
    CustomObservablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs-tutorial';
}
