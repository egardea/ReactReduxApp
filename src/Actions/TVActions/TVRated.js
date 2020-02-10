import { TV_RATED } from '../Types';

const saveTV = payload => ({
    type: TV_RATED,
    payload
});

const ratedTV = tv => dispatch => {
    dispatch(saveTV(tv));
}

export default ratedTV;