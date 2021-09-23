import {
  GET_CAT_PRODUCTS_FAIL,
  GET_CAT_PRODUCTS_LOADING,
  GET_CAT_PRODUCTS_REQUEST,
  GET_CAT_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "../types";

export const getProductsRequest = (prop) => {
  return {
    type: GET_PRODUCTS_REQUEST,
    payload: prop,
  };
};
export const getProductsSuccess = (prop) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: prop,
  };
};

export const getProductsFailure = (errors) => {
  return {
    type: GET_PRODUCTS_FAIL,
    payload: { errors },
  };
};

export const getProductsLoading = (loading) => {
  return {
    type: GET_PRODUCTS_LOADING,
    payload: loading,
  };
};

export const getProductRequest = (prop) => {
  return {
    type: GET_PRODUCT_REQUEST,
    payload: prop,
  };
};

export const getProductSuccess = (prop) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: prop,
  };
};

export const getProductFailure = (errors) => {
  return {
    type: GET_PRODUCT_FAIL,
    payload: { errors },
  };
};

export const getProductLoading = (loading) => {
  return {
    type: GET_PRODUCT_LOADING,
    payload: loading,
  };
};

export const getCatProductsRequest = (prop) => {
  return {
    type: GET_CAT_PRODUCTS_REQUEST,
    payload: prop,
  };
};

export const getCatProductsSuccess = (prop) => {
  return {
    type: GET_CAT_PRODUCTS_SUCCESS,
    payload: prop,
  };
};

export const getCatProductsFailure = (errors) => {
  return {
    type: GET_CAT_PRODUCTS_FAIL,
    payload: { errors },
  };
};

export const getCatProductsLoading = (loading) => {
  return {
    type: GET_CAT_PRODUCTS_LOADING,
    payload: loading,
  };
};
