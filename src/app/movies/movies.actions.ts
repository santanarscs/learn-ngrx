import { Action } from '@ngrx/store';

export enum ActionTypes {
    LOAD_ALL = '[Movies] Load all requested',
    LOAD_ALL_SUCCESS = '[Movies] Load all requested success',
}
export class LoadAllAction implements Action {
    readonly type = ActionTypes.LOAD_ALL;
}
export class LoadAllSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_ALL_SUCCESS;
    constructor(public payload: {movies: any[], totalCount: number}) {}
}

export type ActionUnion = LoadAllAction | LoadAllSuccessAction;
