import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Greet';

  Greet(names: string[]): string {
    if ( names.length === 0 ) {
      return 'Hello, my friend.';
    }
    if ( names.length === 1 ) {
      if ( names[0].toUpperCase() === names[0] ) {
        return 'HELLO ' + names[0] + '!';
      }
      return 'Hello, ' + names[0] + '.';
    }
    if ( names.length > 1 ) {
      const uppercase = [];
      const lowercase = [];
      let text = 'Hello';
      for ( const name of names ) {
        if ( name === name.toUpperCase() ) {
          uppercase.push(name);
        } else {
          lowercase.push(name);
        }
      }
      if ( lowercase.length > 0 ) {
        text += ', ';
        for ( let i = 0; i < lowercase.length - 1; i++ ) {
          text += lowercase[i] + ', ';
        }
        text += 'and ' + lowercase[lowercase.length - 1];
        if ( uppercase.length === 0 ) {
          text += '.';
        }
      }
      if ( lowercase.length > 0 && uppercase.length > 0 ) {
        text += '. AND HELLO ';
      }
      if ( uppercase.length > 0 ) {
        if ( lowercase.length === 0 ) {
          text = text.toUpperCase() + ' ';
        }
        for ( let i = 0; i < uppercase.length - 1; i++ ) {
          text += uppercase[i] + ', ';
        }
        text += 'AND ' + uppercase[uppercase.length - 1] + '!';
      }
      return text;
    }
    return null;
  }
}
