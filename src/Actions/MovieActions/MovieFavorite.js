import { MOVIE_FAVORITE } from '../Types';

const saveData = payload => ({
    type: MOVIE_FAVORITE,
    payload
});

const favoriteMovie = movie => dispatch => {
    dispatch(saveData(movie));
}

export default favoriteMovie;