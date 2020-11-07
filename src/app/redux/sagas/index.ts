/**
 * Created by Daniel on 26-03-2020.
 */
import { all, fork } from "redux-saga/effects";
import userSags from "./user.saga";

function* rootSaga() {
  yield all([fork(userSags)]);
}

export default rootSaga;
