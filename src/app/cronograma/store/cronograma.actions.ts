import { Action } from '@ngrx/store';
export enum ActionTypes {
    LOAD = '[Cronograma] Load requested',
    LOAD_SUCCESS = '[Cronograma] Load requested success'
}

export class LoadAction implements Action {
    readonly type = ActionTypes.LOAD;
}

export class LoadSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_SUCCESS;
    constructor(public payload) {}
}
export type ActionUnion =
    LoadAction | LoadSuccessAction;
