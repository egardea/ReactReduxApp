import {combineReducers} from 'redux';
import apiKeyConfig from './ApiKeyConfig';
import setMediaType from './SetMediaType';
import searchResult from './SearchResult';
import trendingMovie from './MovieReducers/Trending';

export default combineReducers({
    apiKeyConfig,
    setMediaType,
    searchResult,
    trendingMovie,
});