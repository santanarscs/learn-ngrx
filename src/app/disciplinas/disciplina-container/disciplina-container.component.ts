import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadAllAction } from '../disciplina.actions';
import { selectAllDisciplinas, selectTotalDisciplina } from '../disciplina.reducer';

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
    this.disciplinas$ = store.pipe(select(selectAllDisciplinas))
    this.totalCount$ = store.pipe(select(selectTotalDisciplina))
  }

  ngOnInit() {
    this.store.dispatch(new LoadAllAction())
  }

}
