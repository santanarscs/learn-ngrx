import { Action } from '@ngrx/store';
import { ActionTypes, ActionUnion } from './movies.actions';

export interface State {
    movies: any[];
    totalCount: number;
    isLoading: boolean;
}
export const initialState: State = {
    movies: [],
    totalCount: 0,
    isLoading: true
};
export function reducer (state = initialState, action: ActionUnion): State {
    switch (action.type) {
        case ActionTypes.LOAD_ALL:
            return { ...state, isLoading: true };
        case ActionTypes.LOAD_ALL_SUCCESS:
            return {
                ...state,
                totalCount: action.payload.totalCount,
                movies: action.payload.movies,
                isLoading: false
            };
        default:
        return state;
    }
}
