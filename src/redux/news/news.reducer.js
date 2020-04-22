import {NewsActionTypes} from './news.types';

const INITITAL_STATE = {
    news:[],
    errorMessage:''
}

const newsReducer = (state = INITITAL_STATE, action) => {
    switch (action.type) {
        case NewsActionTypes.UPDATE_NEWS_DATA:
            return {
                ...state,
                news:action.payload
            }
        case NewsActionTypes.UPDATE_NEWS_DATA_FAILURE:
            return {
                ...state,
                errorMessage:action.payload
            }
        default:
            return state;

    }
}

export default newsReducer;