import { Action } from '@ngrx/store';
export enum ActionTypes {
    LOAD = '[Cronograma] Load requested',
    LOAD_SUCCESS = '[Cronograma] Load requested success',

    SET_CRONOGRAMA_ID = '[Cronograma] Set cronograma ID'
}

export class LoadAction implements Action {
    readonly type = ActionTypes.LOAD;
}

export class LoadSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_SUCCESS;
    constructor(public payload) {}
}

export class SetCronogramaIdAction implements Action {
    readonly type = ActionTypes.SET_CRONOGRAMA_ID;
    constructor(public payload) {}
}

export type ActionUnion =
    LoadAction | LoadSuccessAction |
    SetCronogramaIdAction;
