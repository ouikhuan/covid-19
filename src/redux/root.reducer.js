import {combineReducers} from 'redux';
import topCountriesReducer from './top-countries/top-countries.reducer';

const rootReducer = combineReducers({
    topCountries: topCountriesReducer,
  });

export default rootReducer;
