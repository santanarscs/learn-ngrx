import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadAction as LoadActionAula} from '../store/aula.actions';
import { LoadAction as LoadActionCronograma} from '../store/cronograma.actions';

@Component({
  selector: 'app-cronograma-container',
  templateUrl: './cronograma-container.component.html',
  styleUrls: ['./cronograma-container.component.scss']
})
export class CronogramaContainerComponent implements OnInit {

  constructor(private store: Store<any>) {

  }

  ngOnInit() {
    this.store.dispatch(new LoadActionAula());
    this.store.dispatch(new LoadActionCronograma());
  }

}
