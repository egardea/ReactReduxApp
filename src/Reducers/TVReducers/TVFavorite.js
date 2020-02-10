import {TV_FAVORITE} from '../../Actions/Types';

const initialState = {
    favTV: [],
    pages: 1
}

export default function(state = initialState, action) {
    const newItem = action.payload;
    const favTV = state.favTV.slice();
    const pages = Math.ceil((state.favTV.slice().length + 1) / 12);
    favTV.push(newItem);
    switch(action.type) {
        case TV_FAVORITE:
            return {
                favTV,
                pages
            }
        default:
            return state;
    }
}