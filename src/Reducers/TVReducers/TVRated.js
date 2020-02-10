import {TV_RATED} from '../../Actions/Types';

const initialState = {
    ratedTV: [],
    pages: 1
}

export default function(state = initialState, action) {
    const newItem = action.payload;
    const ratedTV = state.ratedTV.slice();
    const pages = Math.ceil((state.ratedTV.slice().length + 1) / 12);
    ratedTV.push(newItem);
    switch(action.type) {
        case TV_RATED:
            return {
                ratedTV,
                pages
            }
        default:
            return state;
    }
}