import { spawn } from "redux-saga/effects";
import authSagas from "./auth";
import categorySagas from "./category";
import productSagas from "./product";

export default function* rootSaga() {
  yield spawn(authSagas);
  yield spawn(categorySagas);
  yield spawn(productSagas);
}
