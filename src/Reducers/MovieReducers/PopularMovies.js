import { POPULAR_MOVIES } from '../../Actions/Types';

const initialState = {
    results: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case POPULAR_MOVIES:
            return {
                ...state,
                results: action.payload
            }
        default:
            return state;
    }
}