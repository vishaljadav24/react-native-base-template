import {
    SET_TOKEN,
    SET_USER,
} from "src/redux/action-types";
import {REHYDRATE} from 'redux-persist/constants';

let initialState = {
    user: null,
    token: null
};

export const setToken = (token) => ({type: SET_TOKEN, token});
export const setUser = (user) => ({type: SET_USER, user});
export const logout = () => ({type: REHYDRATE, payload: initialState});