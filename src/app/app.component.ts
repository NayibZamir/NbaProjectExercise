import { Component, OnInit, Input } from '@angular/core';
import { INbaPlayer } from './models';
import { NbaService } from './services/nba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'nba-player-app';
  dataIsLoaded = false;
  players: INbaPlayer[] = [];
  filteredPlayers: INbaPlayer[] = [];
  maxHeight: number = 0;
  LoadingErrorMessage = '';
  filterErrorMessage = '';

  constructor(private readonly nbaService: NbaService) {}

  ngOnInit(): void {
    console.log('Ng onInit');
    this.nbaService.getPlayers().subscribe(
      (players) => {
        this.players = players;
        this.dataIsLoaded = true;
      },
      (err) => {
        this.LoadingErrorMessage = 'There was an error loading the data';
        this.dataIsLoaded = true;
      }
    );
  }

  search(): void {
    this.filterErrorMessage = '';
    if (this.maxHeight > 0) {
      // this.filteredPlayers = this.players.filter(
      //   (player) => player.h_in <= this.maxHeight
      // );
      this.filteredPlayers = this.fiterLessOrEqualThan(
        this.players,
        this.maxHeight
      );
    } else {
      this.filterErrorMessage = 'Height should be greather than zero';
    }
  }

  numberOnly(event: { which: any; keyCode: any }): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  fiterLessOrEqualThan(players: INbaPlayer[], height: number) {
    const result: INbaPlayer[] = [];
    players.forEach((player) => {
      if (player.h_in >= height) {
        result.push(player);
      }
    });
    return result;
  }
}
