import types from './constants';

export const testActions = () => ({
  type: types.TEST,
  payload: null,
});

export const testActionsSuccessed = (data: any) => ({
  type: types.TEST_SUCCESSED,
  payload: data,
});

export const testActionsFailed = (error: any) => ({
  type: types.TEST_FAILED,
  payload: error,
});
