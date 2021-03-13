import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Greet'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Greet');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Greet app is running!');
  });

  describe('Greet function', () => {
    it('should greet when input empty', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.Greet([])).toBe('Hello, my friend.');
    });

    it('should greet a user', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const input = ['Alex'];
      expect(app.Greet(input)).toBe('Hello, Alex.');
    });

    it('should greet many users', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const input = ['Alex', 'Anna', 'Jhon'];
      expect(app.Greet(input)).toBe('Hello, Alex, Anna, and Jhon.');
    });
    
    it('should greet in a shouting way', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const input = ['ALEX'];
      expect(app.Greet(input)).toBe('HELLO ALEX!');
    });
  });
});
