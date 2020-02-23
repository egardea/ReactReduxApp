import {MOVIE_FAVORITE, DELETE_MOVIE_RATED} from '../../Actions/Types';

const initialState = {
    favMovies: [],
}

export default function (state = initialState, action) {
    let favMovies;
    console.log(action);
    if(action.type === 'MOVIE_FAVORITE') {
        const newItem = action.payload;
        favMovies = state.favMovies.slice();
        favMovies.push(newItem);
    } else if(action.type === 'DELETE_MOVIE_RATED'){
        const id = action.payload;
        favMovies = state.favMovies.slice();
        favMovies.filter((cur, index) => {
            if(cur.id == id) {
                return favMovies.splice(index, 1);
            }
        })
    }
    switch(action.type) {
        case MOVIE_FAVORITE:
            return {
                favMovies,
            }
        case DELETE_MOVIE_RATED:
            return {
                favMovies,
            }
        default: 
            return state;
    }
}