import { combineReducers } from "redux";
import personalInformationData from "./auth";
import categoryData from "./category";
import productData from "./product";
import loadingIndicator from "./loadingIndicator";
import ajaxStatuses from "./ajaxStatuses";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "personalInformationData",
  storage,
  whitelist: ["user", "isLoggedIn"],
};

export default combineReducers({
  personalInformationData: persistReducer(
    authPersistConfig,
    personalInformationData
  ),
  loadingIndicator,
  ajaxStatuses,
  categoryData,
  productData,
});
