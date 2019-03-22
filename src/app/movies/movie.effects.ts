import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { MoviesService } from './shared/movies.service';
import { ActionTypes, LoadAllAction, LoadAllSuccessAction } from './movies.actions';
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
}
