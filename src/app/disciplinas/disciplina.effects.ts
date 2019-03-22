import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { DisciplinaService } from './shared/disciplina.service';
import { ActionTypes, LoadAllAction, LoadAllSuccessAction, CreateSuccessAction, ActionUnion, CreateAction, RemoveAction, RemoveSuccessAction } from './disciplina.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DisciplinaEffects {

    constructor(private action$: Actions, private api: DisciplinaService) { }

    @Effect()
    loadDisciplinas$ = this.action$
        .pipe(
            ofType(ActionTypes.LOAD_ALL),
            switchMap(() =>
                this.api.getAll()
                    .pipe(
                        map(res => new LoadAllSuccessAction(res)),
                    )
            ),
        );
    @Effect()
    createDisciplina$ = this.action$
        .pipe(
            ofType<CreateAction>(ActionTypes.CREATE),
            map(action => action.payload),
            switchMap((data) =>
                this.api.insert(data)
                    .pipe(
                        map(res => new CreateSuccessAction(res)),
                        catchError(error => error)
                    )
            )
        )
    @Effect()
    removeDisciplina$ = this.action$
        .pipe(
            ofType<RemoveAction>(ActionTypes.REMOVE),
            map(action => action.payload),
            switchMap(data =>
                this.api.remove(data)
                    .pipe(
                        map(res => new RemoveSuccessAction(res)),
                        catchError(error => error)
                    )
            )

        )
}
