import {TopCountriesActionTypes} from './top-countries.types';

export const updateTopCountriesBarData = countries => ({
    type:TopCountriesActionTypes.UPDATE_COUNTRY_BAR_DATA,
    payload:countries
});

export const fetchTopCountriesDataFailure = message => ({
    type:TopCountriesActionTypes.FETCH_COUNTRY_BAR_DATA_FAILURE,
    payload:message
});