import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Greet';

  Greet(names: string[]): string {
    if (names.length === 0)
    {
      return 'Hello, my friend.';
    }
    return 'Hello, Alex.';
  }
}
