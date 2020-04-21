import {CountriesActionTypes} from './countries.types';

export const updateCountriesData = countries => ({
    type:CountriesActionTypes.UPDATE_COUNTRY_DATA,
    payload:countries
});

export const fetchCountriesDataFailure = message => ({
    type:CountriesActionTypes.FETCH_COUNTRY_DATA_FAILURE,
    payload:message
});