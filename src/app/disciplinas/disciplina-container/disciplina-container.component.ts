import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getDisciplinasState } from '../disciplina.reducer';
import { map } from 'rxjs/operators';
import { LoadAllAction } from '../disciplina.actions';

@Component({
  selector: 'app-disciplina-container',
  templateUrl: './disciplina-container.component.html',
  styleUrls: ['./disciplina-container.component.scss']
})
export class DisciplinaContainerComponent implements OnInit {

  disciplinas$: Observable<any>;
  totalCount$: Observable<any>;
  isLoading$: Observable<any>;
  constructor(private store: Store<any>) {  
    this.disciplinas$ = store.select(getDisciplinasState).pipe(map(state => state.disciplinas))
    this.totalCount$ = store.select(getDisciplinasState).pipe(map(state => state.totalCount))
    this.isLoading$ = store.select(getDisciplinasState).pipe(map(state => state.isLoading))
  }

  ngOnInit() {
    this.store.dispatch(new LoadAllAction())
  }

}
