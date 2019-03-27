import { Action } from '@ngrx/store';

export enum ActionTypes {
    LOAD = '[Aulas] Load requested',
    LOAD_SUCCESS = '[Aulas] Load requested success'
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
