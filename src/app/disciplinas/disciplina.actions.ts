import { Action } from '@ngrx/store';

export enum ActionTypes {
    LOAD_ALL = '[Disciplina] Load all requested',
    LOAD_ALL_SUCCESS = '[Disciplina] Load all requested success',

    CREATE = '[Disciplina] create disciplina requested',
    CREATE_SUCCESS = '[Disciplina] create disciplina success',

    REMOVE = '[Disciplina] Remove disciplina requested',
    REMOVE_SUCCESS = '[Disciplina] Remove disciplina requested success'
}
export class LoadAllAction implements Action {
    readonly type = ActionTypes.LOAD_ALL;
}
export class LoadAllSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_ALL_SUCCESS;
    constructor(public payload: {disciplinas: any[], totalCount: number}) {}
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
