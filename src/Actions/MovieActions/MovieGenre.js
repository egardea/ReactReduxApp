import { MOVIE_GENRE } from '../Types';
import Axios from 'axios';

const saveData = payload => ({
    type: MOVIE_GENRE,
    payload
});

const movieGenre = url => dispatch => {
    Axios.get(url)
    .then(response => dispatch(saveData(response.data)))
    .catch(error => console.log(error));
}
export default movieGenre;