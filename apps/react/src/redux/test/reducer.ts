import types from './constants';

const initState = {
  data: [],
};

export default function authReducer(state: any = initState, action: any) {
  switch (action.type) {
    case types.TEST_SUCCESSED: {
      console.log(action.payload);
      return { ...state, data: action.payload.data };
    }

    default:
      return state;
  }
}
