import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { test } from '../services'

function* fetchUser(payload) {
   try {
      const user = yield call(test, { ...payload });
      yield put({type: "TEST_SUCCESS", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery("TEST_REQUEST", fetchUser);
}

export default mySaga;
