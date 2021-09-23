import {
  GET_CATEGORY_LOADING,
  GET_CAT_PRODUCTS_LOADING,
  GET_PRODUCTS_LOADING,
  GET_PRODUCT_LOADING,
  LOGIN_LOADING,
  POST_TOKEN_REFRESH_LOADING,
  POST_UPDATE_USER_LOADING,
  REGISTER_LOADING,
} from "../types";

const initialState = {
  loginLoading: false,
  postTokenRefresh: false,
  registerLoading: false,
  postUpdateUserLoading: false,
  getCategoryLoading: true,
  getProductsLoading: true,
  getProductLoading: true,
  getCatProductsLoading: true,
};

const loadingIndicator = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loginLoading: payload,
      };

    case POST_TOKEN_REFRESH_LOADING:
      return {
        ...state,
        postTokenRefresh: payload,
      };

    case REGISTER_LOADING:
      return {
        ...state,
        registerLoading: payload,
      };

    case POST_UPDATE_USER_LOADING:
      return {
        ...state,
        postUpdateUserLoading: payload,
      };

    case GET_CATEGORY_LOADING:
      return {
        ...state,
        getCategoryLoading: payload,
      };

    case GET_PRODUCTS_LOADING:
      return {
        ...state,
        getProductsLoading: payload,
      };

    case GET_PRODUCT_LOADING:
      return {
        ...state,
        getProductLoading: payload,
      };

    case GET_CAT_PRODUCTS_LOADING:
      return {
        ...state,
        getCatProductsLoading: payload,
      };

    default:
      return state;
  }
};

export default loadingIndicator;
