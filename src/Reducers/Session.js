import { TOKEN, SESSION_TYPE } from '../Actions/Types';
import { act } from 'react-dom/test-utils';

const initialState = {
    session: 'public',
    token: null
};

export default function(state = initialState, action) {
    console.log(action.payload);
    switch (action.type) {
        case SESSION_TYPE:
            return {
                session: action.payload
            };
        case TOKEN:
            return {
                token: action.payload
            }
        default:
            return state;
    }
    
};