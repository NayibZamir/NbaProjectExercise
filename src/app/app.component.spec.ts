import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { INbaPlayer } from './models';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'nba-player-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('nba-player-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'nba-player-app app is running!'
    );
  });

  it('should return a filtered array', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const playersMock: INbaPlayer[] = [
      {
        first_name: 'Nayib',
        last_name: 'Alarcon',
        h_in: 77,
        h_meters: 1.96,
      },
      {
        first_name: 'Rodrigo',
        last_name: 'Bonino',
        h_in: 84,
        h_meters: 2.13,
      },
    ];
    expect(app.fiterLessOrEqualThan(playersMock, 80)).toBeInstanceOf(Array);
  });
});
