import {
  GET_CATEGORY_FAIL,
  GET_CATEGORY_SUCCESS,
  GET_CAT_PRODUCTS_FAIL,
  GET_CAT_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  POST_TOKEN_REFRESH_FAIL,
  POST_TOKEN_REFRESH_SUCCESS,
  POST_UPDATE_USER_FAIL,
  POST_UPDATE_USER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../types";

const initialState = {
  errors: {},
  success: {},
};

const ajaxStatuses = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_FAIL:
      state.errors.login = payload.errors;
      return { ...state };

    case LOGIN_SUCCESS:
      state.success.login = payload.user;
      return { ...state };

    case POST_TOKEN_REFRESH_FAIL:
      state.errors.postTokenRefresh = payload.errors;
      return { ...state };

    case POST_TOKEN_REFRESH_SUCCESS:
      state.success.postTokenRefresh = payload.message;
      return { ...state };

    case REGISTER_FAIL:
      state.errors.register = payload.errors;
      return { ...state };

    case REGISTER_SUCCESS:
      state.success.register = payload.message;
      return { ...state };

    case POST_UPDATE_USER_FAIL:
      state.errors.postUpdateUser = payload.errors;
      return { ...state };

    case POST_UPDATE_USER_SUCCESS:
      state.success.postUpdateUser = payload.message;
      return { ...state };

    case GET_CATEGORY_FAIL:
      state.errors.getCategory = payload.errors;
      return { ...state };

    case GET_CATEGORY_SUCCESS:
      state.success.getCategory = payload.message;
      return { ...state };

    case GET_PRODUCTS_FAIL:
      state.errors.getProducts = payload.errors;
      return { ...state };

    case GET_PRODUCTS_SUCCESS:
      state.success.getProducts = payload.message;
      return { ...state };

    case GET_PRODUCT_FAIL:
      state.errors.getProduct = payload.errors;
      return { ...state };

    case GET_PRODUCT_SUCCESS:
      state.success.getProduct = payload.message;
      return { ...state };

    case GET_CAT_PRODUCTS_FAIL:
      state.errors.getCatProducts = payload.errors;
      return { ...state };

    case GET_CAT_PRODUCTS_SUCCESS:
      state.success.getCatProducts = payload.message;
      return { ...state };

    default:
      return state;
  }
};

export default ajaxStatuses;
