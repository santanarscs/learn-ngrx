import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ActionTypes, LoadSuccessAction, SaveSuccessAction, SaveAction, LoadAction } from '../store/aula.actions';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { CronogramaService } from '../shared/cronograma.service';

@Injectable()
export class AulaEffects {

    constructor(private action$: Actions, private api: CronogramaService) { }

    @Effect()
    loadAulas$ = this.action$
        .pipe(
            ofType<LoadAction>(ActionTypes.LOAD),
            map(action => action.payload),
            switchMap((payload) =>
                this.api.getAllAula(payload)
                    .pipe(
                        map(res => new LoadSuccessAction(res)),
                    )
            ),
        );
    @Effect()
    saveAula$ = this.action$
        .pipe(
            ofType<SaveAction>(ActionTypes.SAVE),
            map(action => action.payload),
            switchMap((data) =>
                this.api.saveAula(data)
                    .pipe(
                        map(res => new SaveSuccessAction(res)),
                        catchError(error => error)
                    )
            )
        )
}
