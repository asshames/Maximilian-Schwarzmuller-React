import { put, delay } from "redux-saga/effects";

import * as actions from "../actions/index";

export function* logOutSaga (action){
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put(actions.logOutSucceed());
}

export function* checkAuthTimeOutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logOut());
}