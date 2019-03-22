import { ActionTypes, ActionUnion } from './disciplina.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface Disciplina {
    id: number,
    name: string,
    description: string
}




export interface State {
    disciplinas: Disciplina[];
    totalCount: number;
    isLoading: boolean;
}
export const initialState: State = {
    disciplinas: [],
    totalCount: 0,
    isLoading: true
};

export const getDisciplinasState = createFeatureSelector<State>('disciplina');

export function reducer (state = initialState, action: ActionUnion): State {
    switch (action.type) {
        case ActionTypes.LOAD_ALL:
            return { ...state, isLoading: true };
        case ActionTypes.LOAD_ALL_SUCCESS:
            return {
                ...state,
                totalCount: action.payload.totalCount,
                disciplinas: action.payload.disciplinas,
                isLoading: false
            };
        case ActionTypes.CREATE_SUCCESS:
            return { 
                ...state,
                disciplinas: [action.payload, ...state.disciplinas],
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
