import { TV_GENRE } from '../types';
import Axios from 'axios';

const saveData = payload  => ({
    type: TV_GENRE,
    payload
});

const tvGenre = url => dispatch => {
    Axios.get(url)
    .then(response => dispatch(saveData(response.data.results)))
    .catch(error => console.log(error));
};

export default tvGenre;