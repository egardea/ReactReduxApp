import {MOVIE_FAVORITE} from '../../Actions/Types';

const initialState = {
    favMovies: [],
}

export default function (state = initialState, action) {
    const newItem = action.payload;
    const favMovies = state.favMovies.slice();
    favMovies.push(newItem);
    switch(action.type) {
        case MOVIE_FAVORITE:
            return {
                favMovies,
            }   
        default: 
            return state;
    }
}