import { ActionTypes, ActionUnion } from './disciplina.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { UrlSerializer } from '@angular/router';
export interface Disciplina {
    id: number,
    name: string,
    description: string
}

export interface State extends EntityState<Disciplina> {
    totalCount: number;
    selectedId: number;
    isLoading: boolean;
}
export function selectId(d: Disciplina): string {
    return d.id.toString();
}
export function sortByName(a: Disciplina, b: Disciplina): number {
    return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<Disciplina> = createEntityAdapter<Disciplina>({
    selectId: selectId,
    sortComparer: sortByName
});

export const initialState: State = adapter.getInitialState({
    selectedId: null,
    isLoading: true,
    totalCount: 0
});



export function reducer (state = initialState, action: ActionUnion): State {
    switch (action.type) {
        case ActionTypes.LOAD_ALL:
            return { ...state, isLoading: true };
        case ActionTypes.LOAD_ALL_SUCCESS:
            return {
                ...adapter.addAll(action.payload.disciplinas, state),
                totalCount: action.payload.totalCount,
                isLoading: false
            };
        case ActionTypes.CREATE_SUCCESS:
            return { 
                ...state,
                // disciplinas: [action.payload, ...state.disciplinas],
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
export const getDisciplinaId = (state: State) => state.selectedId;

export const{
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = adapter.getSelectors()

export const selectAllDisciplina = selectAll;
export const selectDisciplinaState = createFeatureSelector<any>('disciplina')
export const selectAllDisciplinas = createSelector(
    selectDisciplinaState,
    selectAllDisciplina
)
export const selectTotalDisciplina = createSelector(
    selectDisciplinaState,
    selectTotal
)