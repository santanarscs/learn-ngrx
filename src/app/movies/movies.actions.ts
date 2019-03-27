import { Action } from '@ngrx/store';

export enum ActionTypes {
    LOAD_ALL = '[Movies] Load all requested',
    LOAD_ALL_SUCCESS = '[Movies] Load all requested success',

    CREATE = '[Movies] create movie requested',
    CREATE_SUCCESS = '[Movies] create movie success',

    REMOVE = '[Movies] Remove movie requested',
    REMOVE_SUCCESS = '[Movies] Remove movie requested success'
}
export class LoadAllAction implements Action {
    readonly type = ActionTypes.LOAD_ALL;
}
export class LoadAllSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_ALL_SUCCESS;
    constructor(public payload: {movies: any[], totalCount: number}) {}
}

export class CreateAction implements Action {
    readonly type = ActionTypes.CREATE;
    constructor(public payload: any) { }
}
export class CreateSuccessAction implements Action {
    readonly type = ActionTypes.CREATE_SUCCESS;
    constructor(public payload: any) {}
}
export class RemoveAction implements Action {
    readonly type = ActionTypes.REMOVE;
    constructor(public payload: any) {}
}
export class RemoveSuccessAction implements Action {
    readonly type = ActionTypes.REMOVE_SUCCESS;
    constructor(public payload: any) {}
}

export type ActionUnion = 
    LoadAllAction | LoadAllSuccessAction |
    CreateAction | CreateSuccessAction |
    RemoveAction | RemoveSuccessAction;
