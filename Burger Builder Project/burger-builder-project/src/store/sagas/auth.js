import { Put } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

fuction * logOut(action){
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield Put({
        type: actionTypes.AUTH_LOGOUT
    });
}