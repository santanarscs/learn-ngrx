import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LoadAllAction, CreateAction, RemoveAction } from '../../movies.actions';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies$: Observable<any>;
  title: string
  movie = {
    title: '',
    description: ''
  }
  constructor(private store: Store<any>) { this.movies$ = store.pipe(select('movie')); }

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
