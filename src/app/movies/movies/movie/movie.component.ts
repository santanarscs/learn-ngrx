import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LoadAllAction, CreateAction, RemoveAction } from '../../movies.actions';
import { getMoviesState } from '../../movies.reducer';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies$: Observable<any>;
  totalCount$: Observable<any>;
  isLoading$: Observable<any>;
  title: string
  movie = {
    title: '',
    description: ''
  }
  constructor(private store: Store<any>) { 
    this.movies$ = store.select(getMoviesState).pipe(map(state => state.movies))
    this.totalCount$ = store.select(getMoviesState).pipe(map(state => state.totalCount))
    this.isLoading$ = store.select(getMoviesState).pipe(map(state => state.isLoading))
  }

  ngOnInit() {
    this.store.dispatch(new LoadAllAction());
  }
  addMovie(){
    if(this.movie.title && this.movie.description) {
      this.store.dispatch(new CreateAction(this.movie))
      this.movie ={
        title: '',
        description: ''
      }
    }
  }
  removeMovie(key) {
    if(key){
      this.store.dispatch(new RemoveAction(key));
    }
  }
}
