import { Action } from '@ngrx/store';

export enum ActionTypes {
    IncrementHome = '[Scoreboard Page] Home Page',
    IncrementAway = '[Scoreboard Page] Away Page',
    Reset = '[Scoreboard Page] Score reset '
}

export class IncrementHome implements Action {
    readonly type = ActionTypes.IncrementHome;
}
export class IncrementAway implements Action {
    readonly type = ActionTypes.IncrementAway;
}
export class Reset implements Action {
    readonly type = ActionTypes.Reset;
    constructor(public payload: {home: number, away: number}) {}
}

export type ActionUnion = IncrementHome | IncrementAway | Reset;
