import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoadAction as LoadActionAula, SaveAction} from '../store/aula.actions';
import { LoadAction as LoadActionCronograma, SetCronogramaIdAction} from '../store/cronograma.actions';
import { Observable } from 'rxjs';
import { selectAllAulas } from '../store/aula.reducer';
import { selectAllCronogramas, selectCurrentCronograma, selectCurrentCronogramaId } from '../store/cronograma.reducer';

@Component({
  selector: 'app-cronograma-container',
  templateUrl: './cronograma-container.component.html',
  styleUrls: ['./cronograma-container.component.scss']
})
export class CronogramaContainerComponent implements OnInit {

  aulas$: Observable<any>;
  cronogramas$: Observable<any>;
  cronogramaSelect$: Observable<any>;
  aula = {
    nome: '',
    descricao: '',
    cronogramaId: ''
  }
  constructor(private store: Store<any>) {
    this.aulas$ = store.pipe(select(selectAllAulas))
    this.cronogramas$ = store.pipe(select(selectAllCronogramas))
    this.cronogramaSelect$ = store.pipe(select(selectCurrentCronograma))
  }

  ngOnInit() {
    this.store.dispatch(new LoadActionCronograma());
  }
  selectCronograma(key) {
    this.aula.cronogramaId = key
    this.store.dispatch(new LoadActionAula(key));
    this.store.dispatch(new SetCronogramaIdAction(key))
  }

  saveAula(){
    this.store.dispatch(new SaveAction(this.aula))
    this.aula.nome = ''
    this.aula.descricao = ''
  }
}
