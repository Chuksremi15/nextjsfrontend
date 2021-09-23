import {
  GET_CATEGORY_FAIL,
  GET_CATEGORY_LOADING,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from "../types";

export const getCategoryRequest = (prop) => {
  return {
    type: GET_CATEGORY_REQUEST,
    payload: prop,
  };
};
export const getCategorySuccess = (prop) => {
  return {
    type: GET_CATEGORY_SUCCESS,
    payload: prop,
  };
};

export const getCategoryFailure = (errors) => {
  return {
    type: GET_CATEGORY_FAIL,
    payload: { errors },
  };
};

export const getCategoryLoading = (loading) => {
  return {
    type: GET_CATEGORY_LOADING,
    payload: loading,
  };
};
