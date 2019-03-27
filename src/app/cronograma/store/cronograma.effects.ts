import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CronogramaService } from '../shared/cronograma.service';
import { ActionTypes, LoadSuccessAction } from './cronograma.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class CronogramaEffects {

    constructor(private api: CronogramaService, private actions$: Actions) {}

    @Effect()
    loadAll$ = this.actions$.pipe(
        ofType(ActionTypes.LOAD),
        switchMap(() =>
            this.api.getAllAula()
                .pipe(
                    map(res => new LoadSuccessAction(res))
                )
        )
    );
}
