import {combineReducers} from 'redux';
import countriesReducer from './countries/countries.reducer';
import newsReducer from './news/news.reducer';

const rootReducer = combineReducers({
    countries: countriesReducer,
    newsData: newsReducer
});

export default rootReducer;
