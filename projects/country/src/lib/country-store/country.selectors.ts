import {
    createSelector,
    createFeatureSelector,
    MemoizedSelector
} from '@ngrx/store';

import * as fromModel from './country.model';
import * as fromReducer from './country.reducer';

const selectCountryState: MemoizedSelector<object, fromReducer.State> =
    createFeatureSelector<fromReducer.State>(fromModel.CountryStoreName);

export const getCountryIds = createSelector(
    selectCountryState,
    fromReducer.selectCountryIds
);
export const getCountryEntities = createSelector(
    selectCountryState,
    fromReducer.selectCountryEntities
);
export const getAllCountries = createSelector(
    selectCountryState,
    fromReducer.selectAllCountries
);
export const getCountryTotal = createSelector(
    selectCountryState,
    fromReducer.selectCountryTotal
);
export const getCurrentCountryId = createSelector(
    selectCountryState,
    fromReducer.selectCurrentCountryId
);

export const selectCurrentCountry = createSelector(
    getCountryEntities,
    getCurrentCountryId,
    (countryEntities: fromModel.Dictionary<fromModel.Country>, countryId) => countryEntities[countryId]
);
