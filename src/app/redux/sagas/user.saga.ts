import { put, call, takeLatest} from 'redux-saga/effects';
import {USER_ACTIONS} from '../action-types/user.types'
import execute, { user } from '../../services/apis';

function* getAll() {
  try {
    const data = yield call(execute, user.getAll());
    yield put({ type: USER_ACTIONS.LOAD_USERS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    yield put({ type: USER_ACTIONS.LOAD_USERS_FAIL, error });
  }
}
const LOAD_USERS = USER_ACTIONS.LOAD_USERS;

export default function* userSagas() {
  yield takeLatest(LOAD_USERS, getAll);
}

