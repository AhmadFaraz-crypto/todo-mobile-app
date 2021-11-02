import types from './types';

export const login = data => ({
  type: types.login,
  data,
});

export const setUserData = user => ({
  type: types.setUserData,
  user,
});

export const reset = () => ({
  type: types.reset,
});
