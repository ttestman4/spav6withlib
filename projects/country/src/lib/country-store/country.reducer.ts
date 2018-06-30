import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as fromModel from './country.model';
import { CountryActions, CountryActionTypes } from './country.actions';

export interface State extends EntityState<fromModel.Country> {
  // additional entities state properties
  selectedCountryId: string | null;
}

export const adapter: EntityAdapter<fromModel.Country> = createEntityAdapter<fromModel.Country>({
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedCountryId: null,
});

export function reducer(
  state = initialState,
  action: CountryActions
): State {
  switch (action.type) {
    case CountryActionTypes.AddCountry: {
      return adapter.addOne(action.payload.country, state);
    }

    case CountryActionTypes.UpsertCountry: {
      return adapter.upsertOne(action.payload.country, state);
    }

    case CountryActionTypes.AddCountries: {
      return adapter.addMany(action.payload.countrys, state);
    }

    case CountryActionTypes.UpsertCountries: {
      return adapter.upsertMany(action.payload.countrys, state);
    }

    case CountryActionTypes.UpdateCountry: {
      return adapter.updateOne(action.payload.country, state);
    }

    case CountryActionTypes.UpdateCountries: {
      return adapter.updateMany(action.payload.countrys, state);
    }

    case CountryActionTypes.DeleteCountry: {
      return adapter.removeOne(action.payload.id, state);
    }

    case CountryActionTypes.DeleteCountries: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case CountryActionTypes.LoadCountries: {
      return adapter.addAll(action.payload.countrys, state);
    }

    case CountryActionTypes.ClearCountries: {
      return adapter.removeAll({ ...state, selectedCountryId: null });
    }

    default: {
      return state;
    }
  }
}

export const selectCurrentCountryId = (state: State) => state.selectedCountryId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of country ids
export const selectCountryIds = selectIds;

// select the dictionary of country entities
export const selectCountryEntities: any = selectEntities;

// select the array of country
export const selectAllCountries = selectAll;

// select the total coountry count
export const selectCountryTotal = selectTotal;
