import { MOVIE_FAVORITE, DELETE_MOVIE_RATED } from '../Types';

const saveData = payload => ({
    type: MOVIE_FAVORITE,
    payload
});

const deleteData = payload => ({
    type: DELETE_MOVIE_RATED,
    payload
})
export const favoriteMovie = movie => dispatch => {
    dispatch(saveData(movie));
}

export const deleteFavorite = movie => dispatch => {
    dispatch(deleteData(movie));
}