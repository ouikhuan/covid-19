import {combineReducers} from 'redux';
import countriesReducer from './countries/countries.reducer';

const rootReducer = combineReducers({
    countries: countriesReducer,
  });

export default rootReducer;
