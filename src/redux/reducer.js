import {
    SET_USER,
    SET_TOKEN
} from "src/redux/action-types";
import {REHYDRATE} from 'redux-persist/constants';

let initial = {
    user: null,
    token: null
};

const reducer = (state = initial, action) => {
    switch (action.type) {

        case SET_USER:
            return Object.assign({}, state, {user: action.user});
            break;
        case SET_TOKEN:
            return Object.assign({}, state, {token: action.token});
            break;
        case REHYDRATE:
            return {...state, ...action.payload};
            break;
        default:
            return state;
            break;
    }
};

export default reducer;