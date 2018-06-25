import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

export interface State {
  name: string;
}

const initialState = 'Root Store';


export function reducer(
  state: string = initialState
): string {
  return state;
}

export const reducers: ActionReducerMap<State> = {
  name: reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];
