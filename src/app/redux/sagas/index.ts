/**
 * Created by Daniel on 26-03-2020.
 */
import { fork } from "redux-saga/effects";
import userSags from "./user.saga";

function* rootSaga() {
  yield [fork(userSags)];
}

export default rootSaga;
