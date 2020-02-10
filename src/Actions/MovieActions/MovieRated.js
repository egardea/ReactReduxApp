import {MOVIE_RATED} from '../Types';

const saveData = payload => ({
    type: MOVIE_RATED,
    payload
})

const ratedMovie = movie => dispatch => {
    dispatch(saveData(movie));
}

export default ratedMovie;