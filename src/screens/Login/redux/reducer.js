import types from './types';

const initialState = {
  user: false,
  requesting: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {...state, requesting: true};

    case types.setUserData:
      return {...state, requesting: false, user: action.user};

    case types.reset:
      return {
        ...state,
        requesting: false,
      };

    default:
      return state;
  }
};
