import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionUnion, ActionTypes } from './aula.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface Aula {
    id: number;
    nome: string;
    descricao: string;
}

export interface State extends EntityState<Aula> {
    isLoading: boolean;
    selectedId: number;
}

export function selectId(a: Aula): string {
    return a.id.toString();
}

export const adapter: EntityAdapter<Aula> = createEntityAdapter<Aula>({
    selectId: selectId,
    sortComparer: false
});
export const initialState: State = adapter.getInitialState({
    selectedId: null,
    isLoading: true,
});


export function reducer(state = initialState, action: ActionUnion): State {
    switch (action.type) {
        case ActionTypes.LOAD_SUCCESS:
            return {
                ...adapter.addAll(action.payload, state),
                isLoading: false
            };
        case ActionTypes.SAVE_SUCCESS:
            return {
                ...adapter.addOne(action.payload, state)
            }
        default:
            return state;
    }
}

// selectors

export const getAulaId = (state: State) => state.selectedId;

export const{
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = adapter.getSelectors();

export const selectAllAula = selectAll;
export const selectAulaState = createFeatureSelector<any>('aula');
export const selectAllAulas = createSelector(
    selectAulaState,
    selectAllAula
);
export const selectCurrentAulaId = createSelector(
    selectAulaState,
    getAulaId
);
export const selectCurrentAula = createSelector(
    selectAllAula,
    selectCurrentAulaId,
    (entities, aulaId) => entities[aulaId]
);
export const selectTotalAula = createSelector(
    selectAulaState,
    selectTotal
);
