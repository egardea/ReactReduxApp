import { TV_FAVORITE } from '../Types';

const saveTV = payload => ({
    type: TV_FAVORITE,
    payload
});

const favoriteTV = tv => dispatch => {
    dispatch(saveTV(tv));
}

export default favoriteTV;