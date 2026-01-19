import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertToObservableComponent } from "./convert-to-observable/convert-to-observable.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConvertToObservableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs-tutorial';
}
