import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

// config
import {appConfig} from '../../../config/app';

// utils
import XHR from '../../../utils/XHR';

// types
import types from './types';

// actions
import {reset, setUserData} from './actions';

function loginAPI(data) {
  const URL = `${appConfig.backendServerURL}/api/v1/login/`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    data,
  };

  return XHR(URL, options);
}

function* login({data}) {
  try {
    const response = yield call(loginAPI, data);
    const {user} = response;

    AsyncStorage.setItem('authToken', user);

    yield put(setUserData(user));
  } catch (e) {
    yield put(reset());
  }
}

export default all([takeLatest(types.login, login)]);
