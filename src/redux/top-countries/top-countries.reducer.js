import {TopCountriesActionTypes} from './top-countries.types';
import {convertToChartData} from './top-countries.utils';

const INITIAL_STATE = {
    countries:[],
    errorMessage:''
}

const topCountriesReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case TopCountriesActionTypes.UPDATE_COUNTRY_BAR_DATA:
            return {
                ...state,
                countries:convertToChartData(action.payload)
            };
        case TopCountriesActionTypes.FETCH_COUNTRY_BAR_DATA_FAILURE:
            return {
                ...state,
                errorMessage:action.payload
            };
        default:
            return state;
    }
}

export default topCountriesReducer;