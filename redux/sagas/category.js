import axios from "./axios";
import { call, put, takeLatest, spawn } from "redux-saga/effects";
import { GET_CATEGORY_REQUEST } from "../types";
import { clientErrorMessage, delay } from "./reusable";
import {
  getCategoryFailure,
  getCategoryLoading,
  getCategorySuccess,
} from "../actions";

const ajaxDBCalls = {
  getCategory: async () => {
    const response = await axios.get(`/category`);
    return response;
  },
};

function* getCategory({ payload }) {
  try {
    yield put(getCategoryLoading(true));

    const res = yield call(ajaxDBCalls.getCategory, payload);

    yield put(getCategorySuccess(res.data));

    yield put(getCategoryLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(getCategoryFailure(errorMessage));
    yield put(getCategoryLoading(false));
    yield delay();
    yield put(getCategoryFailure(""));
  }
}

//Watchers
function* getCategoryWatcher() {
  yield takeLatest(GET_CATEGORY_REQUEST, getCategory);
}

export default function* categorySagas() {
  yield spawn(getCategoryWatcher);
}
