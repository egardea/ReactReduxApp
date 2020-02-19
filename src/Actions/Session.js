import { TOKEN, SESSION_TYPE } from './Types';
import Axios from 'axios';

const saveData = payload => ({
    type: SESSION_TYPE,
    payload
});
const saveToken = payload => ({
    type: TOKEN,
    payload
});

const getSession = (url, session) => dispatch => {
    Axios.get(url)
    .then(response => dispatch(saveToken(response.data.guest_session_id)))
    .then(() => dispatch(saveData(session)))
    .catch(error => console.log(error));
}
export default getSession;