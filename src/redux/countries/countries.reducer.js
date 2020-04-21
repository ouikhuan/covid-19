import {CountriesActionTypes} from './countries.types';
import {convertToChartData} from './countries.utils';

const INITIAL_STATE = {
    countries:[],
    globalSummary:{},
    errorMessage:''
}

const countriesReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case CountriesActionTypes.UPDATE_COUNTRY_DATA:
            return {
                ...state,
                countries:convertToChartData(action.payload.Countries),
                globalSummary:action.payload.Global
            };
        case CountriesActionTypes.FETCH_COUNTRY_DATA_FAILURE:
            return {
                ...state,
                errorMessage:action.payload
            };
        default:
            return state;
    }
}

export default countriesReducer;