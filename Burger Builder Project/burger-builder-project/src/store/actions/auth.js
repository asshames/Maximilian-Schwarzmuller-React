import * as actionsTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionsTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionsTypes.AUTH_SUCCESS,
        authData : authData
    };
};

export const authFail = ( Error ) => {
    return {
        type: actionsTypes.AUTH_FAIL,
        Error: Error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
    };
};