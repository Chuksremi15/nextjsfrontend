import axios from "./axios";
import { call, put, takeLatest, spawn } from "redux-saga/effects";
import {
  loginFailure,
  loginLoading,
  loginSuccess,
  registerFailure,
  registerLoading,
  registerSuccess,
  postTokenRefreshLoading,
  postTokenRefreshSuccess,
  postTokenRefreshFailure,
  postUpdateUserLoading,
  postUpdateUserSuccess,
  postUpdateUserFailure,
} from "../actions/auth";
import {
  LOGIN_REQUEST,
  POST_TOKEN_REFRESH_REQUEST,
  POST_UPDATE_USER_REQUEST,
  REGISTER_REQUEST,
} from "../types";
import { clientErrorMessage, delay } from "./reusable";

const ajaxDBCalls = {
  login: async (formData) => {
    const response = await axios.post(`/auth/login`, formData);
    return response;
  },
  register: async (formData) => {
    const response = await axios.post(`/auth/register`, formData);
    return response;
  },
  postTokenRefresh: async (formData) => {
    const response = await axios.post(`/auth/refresh/token`, formData);
    return response;
  },
  postUpdateUser: async ({ formData, token }) => {
    console.log(formData, token);
    const response = await axios.put(`/user/edit/profile`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  },
};

function* login({ payload }) {
  try {
    yield put(loginLoading(true));

    const res = yield call(ajaxDBCalls.login, payload);

    console.log(res.data);

    yield put(loginSuccess(res.data));

    yield put(loginLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(loginFailure(errorMessage));
    yield put(loginLoading(false));
    yield delay();
    yield put(loginFailure(""));
  }
}
function* register({ payload }) {
  try {
    yield put(registerLoading(true));

    const res = yield call(ajaxDBCalls.register, payload);

    yield put(registerSuccess(res.data));

    yield put(registerLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(registerFailure(errorMessage));
    yield put(registerLoading(false));
    yield delay();
    yield put(registerFailure(""));
  }
}

function* postTokenRefresh({ payload }) {
  try {
    yield put(postTokenRefreshLoading(true));

    const res = yield call(ajaxDBCalls.postTokenRefresh, payload);

    yield put(postTokenRefreshSuccess(res.data));

    yield put(postTokenRefreshLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(postTokenRefreshFailure(errorMessage));
    yield put(postTokenRefreshLoading(false));
    yield delay();
    yield put(postTokenRefreshFailure(""));
  }
}
function* postUpdateUser({ payload }) {
  try {
    yield put(postUpdateUserLoading(true));

    const res = yield call(ajaxDBCalls.postUpdateUser, payload);

    yield put(postUpdateUserSuccess(res.data));

    yield put(postUpdateUserLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(postUpdateUserFailure(errorMessage));
    yield put(postUpdateUserLoading(false));
    yield delay();
    yield put(postUpdateUserFailure(""));
  }
}

//Watchers
function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, login);
}
function* postTokenRefreshWatcher() {
  yield takeLatest(POST_TOKEN_REFRESH_REQUEST, postTokenRefresh);
}

function* registerWatcher() {
  yield takeLatest(REGISTER_REQUEST, register);
}

function* postUpdateUserWatcher() {
  yield takeLatest(POST_UPDATE_USER_REQUEST, postUpdateUser);
}

export default function* authSagas() {
  yield spawn(loginWatcher);
  yield spawn(postTokenRefreshWatcher);
  yield spawn(registerWatcher);
  yield spawn(postUpdateUserWatcher);
}
