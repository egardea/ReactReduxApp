import {MOVIE_RATED} from '../../Actions/Types';

const initialState = {
    ratedMovie: [],
    pages: 1
}

export default function(state = initialState, action) {
    const newItem = action.payload;
    const ratedMovie = state.ratedMovie.slice();
    const pages = Math.ceil((state.ratedMovie.slice().length + 1) / 12);
    ratedMovie.push(newItem);
    switch(action.type) {
        case MOVIE_RATED:
            return {
                ratedMovie,
                pages
            }
        default:
            return state;
    }
}