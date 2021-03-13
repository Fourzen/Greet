import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Greet';

  Greet(names: string[]): string {
    let text = 'Hello';
    if (names.length === 0)
    {
      return 'Hello, my friend.';
    }
    if (names.length === 1 && names[0] !== names[0].toUpperCase()) {
      return 'Hello, ' + names[0] + '.';
    }
    if (names.length > 1) {
      text += ', ';
      for (let i = 0; i < names.length - 1; i++){
        text += names[i] + ', ';
      }
      text += 'and ' + names[names.length - 1] + '.';
      return text;
    }
    return 'HELLO ALEX!';
  }
}
