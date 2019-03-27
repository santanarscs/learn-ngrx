import { Action } from '@ngrx/store';

export enum ActionTypes {
    LOAD = '[Aulas] Load requested',
    LOAD_SUCCESS = '[Aulas] Load requested success',

    SAVE = '[Aulas] Save aula requested',
    SAVE_SUCCESS = '[Aulas] Save aula success'
}

export class LoadAction implements Action {
    readonly type = ActionTypes.LOAD;
    constructor(public payload?) {}
}
export class LoadSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_SUCCESS;
    constructor(public payload) {}
}

export class SaveAction implements Action {
    readonly type = ActionTypes.SAVE;
    constructor(public payload) {}
}
export class SaveSuccessAction implements Action {
    readonly type = ActionTypes.SAVE_SUCCESS
    constructor(public payload) {}
}

export type ActionUnion =
    LoadAction | LoadSuccessAction |
    SaveAction | SaveSuccessAction;
