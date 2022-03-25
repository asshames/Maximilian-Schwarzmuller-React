import { act } from "react-test-renderer";
import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { logOutSaga, checkAuthTimeOutSaga } from "./auth";

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_CHECKOUT_TIMEOUT, checkAuthTimeOutSaga)
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logOutSaga);
};