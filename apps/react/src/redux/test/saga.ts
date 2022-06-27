import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as API from './api';
import * as ACTIONS from './action';
import types from './constants'

function* testSaga(props: any): any {
  try {
    const res = yield call(API.testApi);
    yield put(ACTIONS.testActionsSuccessed(res));
  } catch (error) {
    yield put(ACTIONS.testActionsFailed(error));
  }
}


export default function* rootSaga() {
    yield all([
        takeEvery(types.TEST, testSaga),
    ]);
}