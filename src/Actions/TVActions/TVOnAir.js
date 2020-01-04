import {TV_ON_THE_AIR} from '../types';
import Axios from 'axios';

const saveData = payload  => ({
    type: TV_ON_THE_AIR,
    payload
});

const tvOnAir = url => dispatch => {
    Axios.get(url)
    .then(response => dispatch(saveData(response.data.results)))
    .catch(error => console.log(error));
};

export default tvOnAir;