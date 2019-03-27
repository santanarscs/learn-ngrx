import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { MoviesService } from './shared/movies.service';
import { ActionTypes, LoadAllAction, LoadAllSuccessAction, CreateSuccessAction, ActionUnion, CreateAction, RemoveAction, RemoveSuccessAction } from './movies.actions';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MovieEffects {

    constructor(private action$: Actions, private api: MoviesService) { }

    @Effect()
    loadMovies$ = this.action$
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
    createMovie$ = this.action$
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
    removeMovie$ = this.action$
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
