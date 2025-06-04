import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  template: `<h1>Hello world!</h1>`,
})
export class AppComponent {
  title = 'my-app';
}
