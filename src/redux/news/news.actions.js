import {NewsActionTypes} from './news.types';

export const updateNewsData = (news)=>({
    type:NewsActionTypes.UPDATE_NEWS_DATA,
    payload:news
});

export const updateNewsDataFailure = (message)=>({
    type:NewsActionTypes.UPDATE_NEWS_DATA_FAILURE,
    payload:message
});