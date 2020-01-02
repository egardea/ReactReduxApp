import { SEARCH_RESULT } from './Types';
import Axios from 'axios';

const saveData = payload => ({
    type: SEARCH_RESULT,
    payload
});

const searchResult = url => dispatch => {
    Axios.get(url)
    .then(response => dispatch(saveData(response)))
    .catch(error => console.log(error))
}
export default searchResult;