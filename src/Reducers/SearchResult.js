import { SEARCH_RESULT } from "../Actions/Types"

const initialState = {
}

export default function (state = initialState, action) {
    switch(action.type) {
        case SEARCH_RESULT:
            return {
                ...state,
                results: action.payload
            };
        default: 
            return state;
    }
}