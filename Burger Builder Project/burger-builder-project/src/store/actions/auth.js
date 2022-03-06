import axios from 'axios';

import * as actionsTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionsTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionsTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = ( error ) => {
    return {
        type: actionsTypes.AUTH_FAIL,
        error: error
    };
};

export const logOut = () => {
    return {
        type: actionsTypes.AUTH_LOGOUT
    }
}

export const checkTimeOut = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBjkhdU7u3n5gjSv05TtZTYnF55-FtPK6E';

        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBjkhdU7u3n5gjSv05TtZTYnF55-FtPK6E'
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkTimeOut(response.data.expiresIn));
            })
            .catch(error => {
                dispatch(authFail(error.response.data.error));
            });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionsTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};
