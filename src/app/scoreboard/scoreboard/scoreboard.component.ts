import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IncrementHome, IncrementAway, Reset } from '../scoreboard-page.actions';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  scoreboard$: Observable<any>;
  constructor(private store: Store<any>) {
    this.scoreboard$ = store.pipe(select('game'));
  }
  goalHome() {
    this.store.dispatch(new IncrementHome());
  }
  goalAway() {
    this.store.dispatch(new IncrementAway());
  }
  reset() {
    this.store.dispatch(new Reset({home: 0, away: 0}));
  }
  ngOnInit() {
  }
}
