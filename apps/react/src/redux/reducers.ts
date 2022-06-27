import { combineReducers } from 'redux';
import testReducer from './test/reducer';

export type State = {
  test: any;
};

const reducers = combineReducers<State>({
  test: testReducer,
});

export default reducers;
