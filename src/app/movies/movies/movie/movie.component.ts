import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LoadAllAction } from '../../movies.actions';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies$: Observable<any>;
  constructor(private store: Store<any>) { this.movies$ = store.pipe(select('movie')); }

  ngOnInit() {
    this.store.dispatch(new LoadAllAction());
  }

}
