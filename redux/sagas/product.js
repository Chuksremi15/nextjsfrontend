import axios from "./axios";
import { call, put, takeLatest, spawn } from "redux-saga/effects";
import {
  GET_CAT_PRODUCTS_REQUEST,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCT_REQUEST,
} from "../types";
import { clientErrorMessage, delay } from "./reusable";
import {
  getCatProductsFailure,
  getCatProductsLoading,
  getCatProductsSuccess,
  getProductFailure,
  getProductLoading,
  getProductsFailure,
  getProductsLoading,
  getProductsSuccess,
  getProductSuccess,
} from "../actions";

const ajaxDBCalls = {
  getProducts: async () => {
    const response = await axios.get(`/product`);
    return response;
  },
  getProduct: async (id) => {
    console.log(id);
    const response = await axios.get(`/product/${id}`);
    return response;
  },
  getCatProducts: async (categoryvalue) => {
    const response = await axios.get(
      `/product/category/${categoryvalue}?limit=6`
    );
    return response;
  },
};

function* getProducts({ payload }) {
  try {
    yield put(getProductsLoading(true));

    const res = yield call(ajaxDBCalls.getProducts, payload);

    yield put(getProductsSuccess(res.data));

    yield put(getProductsLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(getProductsFailure(errorMessage));
    yield put(getProductsLoading(false));
    yield delay();
    yield put(getProductsFailure(""));
  }
}

function* getProduct({ payload }) {
  try {
    yield put(getProductLoading(true));

    const res = yield call(ajaxDBCalls.getProduct, payload);

    yield put(getProductSuccess(res.data));

    yield put(getProductLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(getProductFailure(errorMessage));
    yield put(getProductLoading(false));
    yield delay();
    yield put(getProductFailure(""));
  }
}

function* getCatProducts({ payload }) {
  try {
    yield put(getCatProductsLoading(true));

    const res = yield call(ajaxDBCalls.getCatProducts, payload);

    yield put(getCatProductsSuccess(res.data));

    yield put(getCatProductsLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(getCatProductsFailure(errorMessage));
    yield put(getCatProductsLoading(false));
    yield delay();
    yield put(getCatProductsFailure(""));
  }
}

//Watchers
function* getProductsWatcher() {
  yield takeLatest(GET_PRODUCTS_REQUEST, getProducts);
}
function* getCatProductsWatcher() {
  yield takeLatest(GET_CAT_PRODUCTS_REQUEST, getCatProducts);
}
function* getProductWatcher() {
  yield takeLatest(GET_PRODUCT_REQUEST, getProduct);
}

export default function* productSagas() {
  yield spawn(getProductsWatcher);
  yield spawn(getCatProductsWatcher);
  yield spawn(getProductWatcher);
}
