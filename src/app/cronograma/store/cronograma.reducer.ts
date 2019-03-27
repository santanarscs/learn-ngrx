import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ActionUnion, ActionTypes } from './cronograma.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface Cronograma {
    id: number;
    nome: string;
    descricao: string;
}
export interface State extends EntityState<Cronograma> {
    isLoading: boolean;
    selectedId: number;
}

export function selectId(c: Cronograma) {
    return c.id.toString();
}

export const adapter: EntityAdapter<Cronograma> = createEntityAdapter<Cronograma>({
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
        case ActionTypes.SET_CRONOGRAMA_ID:
            return {
                ...state,
                selectedId: action.payload
            };
        default:
            return state;
    }
}


// selectors

export const getCronogramaId = (state: State) => state.selectedId;

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = adapter.getSelectors();

export const selectAllCronograma = selectAll;
export const selectCronogramaState = createFeatureSelector<any>('cronograma');
export const selectAllCronogramas = createSelector(
    selectCronogramaState,
    selectAllCronograma
);
export const selectCurrentCronogramaId = createSelector(
    selectCronogramaState,
    getCronogramaId
);
export const selectCronogramaEntities = createSelector(
    selectCronogramaState,
    selectAllCronograma
)
export const selectCurrentCronograma = createSelector(
    selectCronogramaEntities,
    selectCurrentCronogramaId,
    (cronogramaEntities, cronogramaId) =>  cronogramaEntities[cronogramaId - 1]
  );
export const selectTotalCronograma = createSelector(
    selectCronogramaState,
    selectTotal
);
