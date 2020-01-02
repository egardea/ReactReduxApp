import {API_KEY_CONFIG} from '../Actions/Types';

const initialState = {
    apiKey: '204a23cc979d825bf52238aed9a22056',
}

export default function(state=initialState, action) {
    switch(action.type) {
        case API_KEY_CONFIG:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}