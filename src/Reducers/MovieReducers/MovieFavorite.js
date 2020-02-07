import {MOVIE_FAVORITE} from '../../Actions/Types';

const initialState = {
    favMovies: [],
    page: 1
}

export default function (state = initialState, action) {
    const newItem = action.payload;
    const favMovies = state.favMovies.slice();
    const page = Math.ceil((state.favMovies.slice().length + 1) / 12);

    favMovies.push(newItem);
    switch(action.type) {
        case MOVIE_FAVORITE:
            return {
                favMovies,
                page,
            }   
        default: 
            return state;
    }
}