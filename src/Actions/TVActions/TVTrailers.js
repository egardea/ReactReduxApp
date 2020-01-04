import {TV_TRAILERS} from '../types';
import Axios from 'axios';

const saveData = payload  => ({
    type: TV_TRAILERS,
    payload
});

const tvTrailers = url => dispatch => {
    Axios.get(url)
    .then(response => dispatch(saveData(response.data.results)))
    .catch(error => console.log(error));
};

export default tvTrailers;