import { ActionTypes, ActionUnion } from './movies.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface Movie {
    id: number,
    name: string,
    description: string
}




export interface State {
    movies: Movie[];
    selectedMovieId: number;
    totalCount: number;
    isLoading: boolean;
}
export const initialState: State = {
    movies: [],
    totalCount: 0,
    selectedMovieId:null,
    isLoading: true
};

export const getMoviesState = createFeatureSelector<State>('movie');

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
        case ActionTypes.CREATE_SUCCESS:
            return { 
                ...state,
                movies: [action.payload, ...state.movies],
                totalCount: state.totalCount + 1
            }
        case ActionTypes.REMOVE_SUCCESS:
        return {
            ...state,
            totalCount: state.totalCount - 1
        }
        default:
        return state;
    }
}
